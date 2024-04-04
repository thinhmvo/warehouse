package com.example.carwarehouse.services;

import com.example.carwarehouse.entities.AccountEntity;
import com.example.carwarehouse.repositories.AccountRepository;
import com.example.carwarehouse.vo.AccountVO;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class AccountService {
    @Autowired
    private AccountRepository repository;

    public String login(AccountVO vo) throws BadRequestException {
        AccountEntity account = repository.findByUsernameAndPassword(vo.getUsername(), vo.getPassword());

        if (Objects.isNull(account)) {
            throw new BadRequestException("Account is not existed!");
        }

        return "Login successfully!";
    }

    public String create(AccountVO vo) throws BadRequestException {
        AccountEntity existedAccount = repository.findByUsername(vo.getUsername());

        if (Objects.nonNull(existedAccount)) {
            throw new BadRequestException("Account is existed!");
        }
        AccountEntity account = repository.save(vo.convertToEntity());

        return "Create account successfully";
    }

    public String changePassword(AccountVO vo) throws BadRequestException {
        AccountEntity account = repository.findByUsernameAndPassword(vo.getUsername(), vo.getPassword());

        if (Objects.isNull(account)) {
            throw new BadRequestException("Account is not existed!");
        }

        AccountEntity entity = new AccountEntity();
        entity.setId(account.getId());
        entity.setUsername(account.getUsername());
        entity.setPassword(vo.getNewPassword());

        repository.save(entity);
        return "Change password successfully";
    }
}
