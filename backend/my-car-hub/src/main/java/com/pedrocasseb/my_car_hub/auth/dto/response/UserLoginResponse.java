package com.pedrocasseb.my_car_hub.auth.dto.response;

import lombok.Data;

@Data
public class UserLoginResponse {
    private String token;
    private String type = "Bearer";
    private Long userId;
    private String username;
    private String email;
}
