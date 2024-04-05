/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useEffect, useState } from "react";
import Router from "next/router";
import { message } from "antd";

export const uesWarehouse = () => {
  const { id } = Router.query;
  const [isLoading, setIsLoading] = useState(true);
  const [isAddCard, setIsAddCar] = useState(false);
  const [isEditCar, setIsEditCar] = useState(false);
  const [infoUpdate, setInfoUpdate] = useState(null);
  const [cars, setCars] = useState([]);
  const getCar = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`http://localhost:8080/api/item/${id}`);
      if (res?.status === 200) {
        setCars(res.data);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  const openEditCar = (info = null) => {
    if (info) {
      setIsEditCar(true);
      setInfoUpdate(info);
    }
  };
  const handleUpload = async (file = null) => {
    if (!file) return;
    try {
      const response = await axios({
        url: "http://localhost:8080/api/item/upload",
        method: "post",
        headers: {
          "Content-Type": file.type,
        },
        data: file,
        // responseType: "arraybuffer",
      });

      // Xử lý kết quả trả về từ server ở đây
      console.log("File uploaded successfully", response);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  const createCar = async (infoCar = null, fileImage = null) => {
    try {
      if (infoCar) {
        // if (fileImage) {
        //   handleUpload(fileImage);
        // }
        const res = await axios.post("http://localhost:8080/api/item", {
          carVin: infoCar.carVin,
          warehouseId: id,
          make: infoCar.make,
          model: infoCar.model,
          color: infoCar.color,
          year: infoCar.year,
          imgId: infoCar.imgId || null,
        });
        if (res?.status === 200) {
          getCar();
        }
      }
    } catch (error) {
      message.error("Add new car false");
    }
  };
  const updateCar = async (infoCar = null) => {
    try {
      if (infoCar) {
        const res = await axios.put("http://localhost:8080/api/item", {
          carVin: infoCar.carVin,
          warehouseId: infoCar.warehouseId,
          make: infoCar.make,
          model: infoCar.model,
          color: infoCar.color,
          year: infoCar.year,
          imgId: infoCar.imgId || null,
        });
        if (res?.status === 200) {
          setInfoUpdate(null);
          getCar();
        }
      }
    } catch (error) {
      message.error("Update car false");
    }
  };
  const deleteCar = async (carVin = null) => {
    if (carVin) {
      const res = await axios.delete(
        `http://localhost:8080/api/item?carVin=${carVin}`
      );
      if (res?.status === 200) {
        setCars((oldValue) =>
          oldValue.filter((item) => item.carVin !== carVin)
        );
      }
    }
  };

  useEffect(() => {
    getCar();
  }, []);

  return {
    isLoading,
    cars,
    isAddCard,
    infoUpdate,
    isEditCar,
    createCar,
    setIsEditCar,
    setIsAddCar,
    deleteCar,
    updateCar,
    openEditCar,
  };
};
