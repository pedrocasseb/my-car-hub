package com.pedrocasseb.my_car_hub.auth.controller;

import com.pedrocasseb.my_car_hub.auth.dto.request.UserLoginRequest;
import com.pedrocasseb.my_car_hub.auth.dto.response.UserLoginResponse;
import com.pedrocasseb.my_car_hub.auth.service.AuthService;
import com.pedrocasseb.my_car_hub.auth.dto.request.UserRegisterRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<String> register(
            @Valid @RequestBody UserRegisterRequest request
            ) {
        authService.register(request);
        return ResponseEntity.ok("Usuário Criado com Sucesso");
    }

    @PostMapping("/login")
    public ResponseEntity<UserLoginResponse> login(@Valid @RequestBody UserLoginRequest request) {
        UserLoginResponse response = authService.login(request);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/test")
    public String test(Authentication auth) {
        if (auth == null) {
            return "NULL (não autenticado)";
        }
        StringBuilder sb = new StringBuilder();
        sb.append("Usuario: ").append(auth.getName()).append("\n").append("Logado com Sucesso");
        return sb.toString();
    }
}
