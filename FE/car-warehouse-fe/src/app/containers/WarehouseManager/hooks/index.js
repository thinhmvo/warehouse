/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useEffect, useState } from "react";

export const uesWarehouseManager = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAddWarehouse, setIsAddWarehouse] = useState(false);
  const [isEditWarehouse, setIsEditWarehouse] = useState(false);
  const [infoUpdate, setInfoUpdate] = useState(null);
  const [warehouses, setWarehouses] = useState([]);
  const getWarehouses = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        "http://localhost:8080/api/warehouse/warehouses"
      );
      if (res?.status === 200) {
        setWarehouses(res.data);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  const openEditWarehouse = (info = null) => {
    if (info) {
      setIsEditWarehouse(true);
      setInfoUpdate(info);
    }
  };
  const createWarehouse = async (infoWarehouse = null) => {
    try {
      if (infoWarehouse) {
        const res = await axios.post("http://localhost:8080/api/warehouse", {
          name: infoWarehouse.name,
          capacity: infoWarehouse.capacity,
          available: infoWarehouse.available,
        });
        if (res?.status === 200) {
          getWarehouses();
        }
      }
    } catch (error) {
      message.error("Login false");
    }
  };
  const updateWarehouse = async (infoWarehouse = null) => {
    try {
      if (infoWarehouse) {
        const res = await axios.put("http://localhost:8080/api/warehouse", {
          id: infoUpdate.id,
          name: infoWarehouse.name,
          capacity: infoWarehouse.capacity,
          available: infoWarehouse.available,
        });
        if (res?.status === 200) {
          setInfoUpdate(null);
          getWarehouses();
        }
      }
    } catch (error) {
      message.error("Login false");
    }
  };
  const deleteWarHouse = async (id = null) => {
    if (id) {
      const res = await axios.delete(
        `http://localhost:8080/api/warehouse/${id}`
      );
      if (res?.status === 200) {
        setWarehouses((oldValue) => oldValue.filter((item) => item.id !== id));
      }
    }
  };

  useEffect(() => {
    getWarehouses();
  }, []);

  return {
    isLoading,
    warehouses,
    isAddWarehouse,
    isEditWarehouse,
    infoUpdate,
    setIsEditWarehouse,
    setIsAddWarehouse,
    createWarehouse,
    deleteWarHouse,
    openEditWarehouse,
    updateWarehouse,
  };
};
