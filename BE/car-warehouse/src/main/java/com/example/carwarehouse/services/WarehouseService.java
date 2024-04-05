package com.example.carwarehouse.services;

import com.example.carwarehouse.models.WarehouseEntity;
import com.example.carwarehouse.repositories.WarehouseRepository;
import com.example.carwarehouse.vo.WarehouseVO;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class WarehouseService {
    @Autowired
    private WarehouseRepository warehouseRepository;

    public List<WarehouseEntity> getAll() {
        return warehouseRepository.findAll();
    }

    public WarehouseEntity getById(int id) throws BadRequestException {
        WarehouseEntity warehouseEntity = warehouseRepository.findById(id);
        if (Objects.isNull(warehouseEntity)) {
            throw new BadRequestException("Not found!");
        }
        return  warehouseEntity;
    }

    public WarehouseEntity create(WarehouseVO vo) {
        return warehouseRepository.save(vo.convertToEntity());
    }

    public WarehouseEntity update(WarehouseEntity warehouseEntity) throws BadRequestException {
        WarehouseEntity entity = warehouseRepository.findById(warehouseEntity.getId());
        return warehouseRepository.save(warehouseEntity);
    }

    public WarehouseEntity delete(int id) throws BadRequestException {
        WarehouseEntity entity = warehouseRepository.findById(id);
        if (Objects.isNull(entity)) {
            throw new BadRequestException("Not Found!");
        }

        warehouseRepository.deleteById(id);
    
        return entity;
    }
}
