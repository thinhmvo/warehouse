package com.example.carwarehouse.repositories;

import com.example.carwarehouse.entities.AccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<AccountEntity, Integer> {
    AccountEntity findByUsernameAndPassword(String username, String password);

    AccountEntity findByUsername(String username);
}
