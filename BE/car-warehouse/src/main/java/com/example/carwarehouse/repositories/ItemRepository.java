package com.example.carwarehouse.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.carwarehouse.models.ItemEntity;

import java.util.List;

public interface ItemRepository extends JpaRepository<ItemEntity, String> {
    ItemEntity findByCarVin(String carVin);

    List<ItemEntity> findByWarehouseId(int id);
}
