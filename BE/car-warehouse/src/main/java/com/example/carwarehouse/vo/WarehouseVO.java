package com.example.carwarehouse.vo;

import com.example.carwarehouse.entities.WarehouseEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class WarehouseVO {
    private Integer id;
    private String name;
    private Integer capacity;
    private Integer available;

    public WarehouseEntity convertToEntity() {
        WarehouseEntity warehouseEntity = new WarehouseEntity();
        warehouseEntity.setName(name);
        warehouseEntity.setCapacity(capacity);
        warehouseEntity.setAvailable(available);
        return warehouseEntity;
    }
}
