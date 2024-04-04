package com.example.carwarehouse.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "warehouse")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class WarehouseEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;

    @Column(name = "name", length = 100)
    private String name;

    @Column(name = "capacity")
    private Integer capacity;

    @Column(name = "available")
    private Integer available;

    @JsonIgnore
    @OneToMany(mappedBy = "warehouseId", cascade = CascadeType.REMOVE)
    private List<ItemEntity> items;
}
