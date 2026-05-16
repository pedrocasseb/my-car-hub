package com.pedrocasseb.my_car_hub.auth.service;

import com.pedrocasseb.my_car_hub.auth.dto.request.UserLoginRequest;
import com.pedrocasseb.my_car_hub.auth.dto.request.UserRegisterRequest;
import com.pedrocasseb.my_car_hub.auth.dto.response.UserLoginResponse;
import com.pedrocasseb.my_car_hub.auth.model.User;
import com.pedrocasseb.my_car_hub.auth.repository.UserRepository;
import com.pedrocasseb.my_car_hub.security.JwtService;
import com.pedrocasseb.my_car_hub.shared.exception.BusinessException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public void register(UserRegisterRequest request) {
        if(userRepository.existsByEmail(request.getEmail())) {
            throw new BusinessException("Email já cadastrado");
        }

        User user = User.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .build();

        userRepository.save(user);
    }

    public UserLoginResponse login(UserLoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new BusinessException("Usuário não encontrado"));

        if(!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new BusinessException("Senha Incorreta");
        }

        String token = jwtService.generateToken(user.getEmail());

        UserLoginResponse response = new UserLoginResponse();
        response.setToken(token);
        response.setUserId(user.getId());
        response.setUsername(user.getUsername());
        response.setEmail(user.getEmail());

        return response;

    }
}
