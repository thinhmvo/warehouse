package com.example.carwarehouse.repositories;

import com.example.carwarehouse.entities.ItemEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ItemRepository extends JpaRepository<ItemEntity, String> {
    ItemEntity findByCarVin(String carVin);

    List<ItemEntity> findByWarehouseId(int id);
}
