package com.example.carwarehouse.controllers;

import com.example.carwarehouse.entities.ItemEntity;
import com.example.carwarehouse.services.ItemService;
import com.example.carwarehouse.vo.ItemVO;
import org.apache.commons.io.IOUtils;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.MediaType;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/item")
public class ItemController {
    public static String UPLOAD_DIRECTORY = System.getProperty("user.dir") + "/src/main/resources/uploads";
    @Autowired
    private ItemService service;

    @GetMapping("/items")
    public List<ItemEntity> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public List<ItemEntity> getByWarehouseId(@PathVariable int id) {
        return service.getByWarehouseId(id);
    }

    @GetMapping
    public ItemEntity getByCarVin(@Param("carVin") String carVin) {
        return service.getByCarVin(carVin);
    }

    @PostMapping
    public ItemEntity create(@RequestBody ItemVO itemVO) throws BadRequestException {
        return service.create(itemVO);
    }

    @PutMapping
    public ItemEntity update(@RequestBody ItemEntity itemEntity) throws BadRequestException {
        return service.update(itemEntity);
    }

    @DeleteMapping("")
    public ItemEntity delete(@Param("carVin") String carVin) throws BadRequestException {
        return service.delete(carVin);
    }

    @PostMapping("/upload") public String uploadImage(Model model, @RequestParam("image") MultipartFile file) throws IOException {
        UUID id = UUID.randomUUID();
        StringBuilder fileNames = new StringBuilder();
        Path fileNameAndPath = Paths.get(UPLOAD_DIRECTORY, id + file.getOriginalFilename());
        fileNames.append(id);
        fileNames.append(file.getOriginalFilename());
        Files.write(fileNameAndPath, file.getBytes());
        model.addAttribute("msg", "Uploaded images: " + fileNames.toString());
        return fileNames.toString();
    }

    @GetMapping(value = "/img/{imgId}",
            produces = MediaType.IMAGE_JPEG_VALUE)
    public byte[] getImage(@PathVariable("imgId") String imgId) throws IOException {
        InputStream in = getClass()
                .getResourceAsStream("/uploads/" + imgId);
        return IOUtils.toByteArray(in);
    }
}
