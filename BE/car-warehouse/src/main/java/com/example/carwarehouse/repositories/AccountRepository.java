package com.example.carwarehouse.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.carwarehouse.models.AccountEntity;

public interface AccountRepository extends JpaRepository<AccountEntity, Integer> {
    AccountEntity findByUsernameAndPassword(String username, String password);

    AccountEntity findByUsername(String username);
}
