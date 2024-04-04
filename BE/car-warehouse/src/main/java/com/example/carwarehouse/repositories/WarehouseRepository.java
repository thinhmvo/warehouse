package com.example.carwarehouse.repositories;

import com.example.carwarehouse.entities.WarehouseEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WarehouseRepository extends JpaRepository<WarehouseEntity, Integer> {
    List<WarehouseEntity> findAll();

    WarehouseEntity findById(int id);
}
