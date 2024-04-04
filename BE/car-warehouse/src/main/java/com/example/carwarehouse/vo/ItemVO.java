package com.example.carwarehouse.vo;

import com.example.carwarehouse.entities.ItemEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ItemVO {
    private String carVin;
    private int warehouseId;
    private String make;
    private String model;
    private String color;
    private String imgId;
    private Integer year;

    public ItemEntity convertToEntity() {
        ItemEntity entity = new ItemEntity();
        entity.setCarVin(carVin);
        entity.setWarehouseId(warehouseId);
        entity.setMake(make);
        entity.setModel(model);
        entity.setColor(color);
        entity.setImgId(imgId);
        entity.setYear(year);
        return entity;
    }
}
