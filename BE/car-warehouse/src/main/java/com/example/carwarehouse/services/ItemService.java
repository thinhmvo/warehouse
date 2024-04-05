package com.example.carwarehouse.services;

import com.example.carwarehouse.models.ItemEntity;
import com.example.carwarehouse.repositories.ItemRepository;
import com.example.carwarehouse.vo.ItemVO;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class ItemService {
    @Autowired
    private ItemRepository repository;

    public List<ItemEntity> getAll() {
        return repository.findAll();
    }

    public List<ItemEntity> getByWarehouseId(int id) {
        return repository.findByWarehouseId(id);
    }

    public ItemEntity getByCarVin(String carVin) {
        return repository.findByCarVin(carVin);
    }

    public ItemEntity create(ItemVO vo) throws BadRequestException {
        ItemEntity item = repository.findByCarVin(vo.getCarVin());
        if (Objects.nonNull(item)) {
            throw new BadRequestException();
        }
        return repository.save(vo.convertToEntity());
    }

    public ItemEntity update(ItemEntity data) throws BadRequestException {
        ItemEntity entity = repository.findByCarVin(data.getCarVin());
        if (Objects.isNull(entity)) {
            throw new BadRequestException("Not Found!");
        }

        return repository.save(data);
    }

    public ItemEntity delete(String carVin) throws BadRequestException {
        ItemEntity entity = repository.findByCarVin(carVin);
        if (Objects.isNull(entity)) {
            throw  new BadRequestException("Not Found!");
        }

        repository.delete(entity);
        return entity;
    }
}
