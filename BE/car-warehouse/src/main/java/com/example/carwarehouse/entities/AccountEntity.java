package com.example.carwarehouse.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "account")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class AccountEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;

    @Column(name = "username", length = 100)
    private String username;

    @Column(name = "password", length = 256)
    private String password;
}
