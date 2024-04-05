package com.example.carwarehouse.vo;

import com.example.carwarehouse.models.AccountEntity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AccountVO {
    private String username;
    private String password;
    private String newPassword;

    public AccountEntity convertToEntity() {
        AccountEntity account = new AccountEntity();
        account.setUsername(username);
        account.setPassword(password);
        return account;
    }
}
