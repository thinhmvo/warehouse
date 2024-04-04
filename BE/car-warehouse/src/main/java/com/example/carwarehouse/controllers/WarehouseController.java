package com.example.carwarehouse.controllers;

import com.example.carwarehouse.entities.WarehouseEntity;
import com.example.carwarehouse.services.WarehouseService;
import com.example.carwarehouse.vo.WarehouseVO;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/warehouse")
public class WarehouseController {
    @Autowired
    private WarehouseService warehouseService;

    @GetMapping("/warehouses")
    public List<WarehouseEntity> getAllWarehouses() {
        return warehouseService.getAll();
    }

    @GetMapping("/{id}")
    public WarehouseEntity getById(@PathVariable int id) throws BadRequestException {
        return warehouseService.getById(id);
    }

    @PostMapping
    public WarehouseEntity create(@RequestBody WarehouseVO vo) {
        return warehouseService.create(vo);
    }

    @PutMapping
    public WarehouseEntity update(@RequestBody WarehouseEntity entity) throws BadRequestException {
        return warehouseService.update(entity);
    }

    @DeleteMapping("/{id}")
    public WarehouseEntity delete(@PathVariable int id) throws BadRequestException {
        return warehouseService.delete(id);
    }
}
