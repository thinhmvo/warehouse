package com.example.carwarehouse.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "item")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class ItemEntity {
    @Id
    @Column(name = "car_vin", length = 50)
    private String carVin;

    @Column(name = "warehouse_id")
    private int warehouseId;

    @Column(name = "make", length = 50)
    private String make;

    @Column(name = "model", length = 50)
    private String model;

    @Column(name = "color", length = 50)
    private String color;

    @Column(name = "img_id")
    private String imgId;

    @Column(name = "year")
    private Integer year;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "warehouse_id", insertable=false, updatable=false)
    private WarehouseEntity warehouseEntity;
}
