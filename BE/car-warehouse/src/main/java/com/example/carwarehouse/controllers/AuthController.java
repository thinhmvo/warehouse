package com.example.carwarehouse.controllers;

import com.example.carwarehouse.services.AccountService;
import com.example.carwarehouse.vo.AccountVO;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private AccountService service;

    @PostMapping("/login")
    public String login(@RequestBody AccountVO vo) throws BadRequestException {
        return service.login(vo);
    }

    @PostMapping("/create")
    public String create(@RequestBody AccountVO vo) throws BadRequestException {
        return service.create(vo);
    }

    @PutMapping("/changePassword")
    public String changePassword(@RequestBody AccountVO vo) throws BadRequestException {
        return service.changePassword(vo);
    }
}
