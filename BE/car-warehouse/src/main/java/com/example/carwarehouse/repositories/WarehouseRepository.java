package com.example.carwarehouse.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.carwarehouse.models.WarehouseEntity;

import java.util.List;

public interface WarehouseRepository extends JpaRepository<WarehouseEntity, Integer> {
    List<WarehouseEntity> findAll();

    WarehouseEntity findById(int id);
}
