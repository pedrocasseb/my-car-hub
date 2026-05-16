package com.pedrocasseb.my_car_hub.auth.repository;

import com.pedrocasseb.my_car_hub.auth.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Boolean existsByEmail(String email);
    Boolean existsByUsername(String username);
    Optional<User> findByEmail(String email);
}
