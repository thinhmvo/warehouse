import { useEffect, useState } from "react";
import axios from "axios";

export const useEditCar = () => {
  const [warehouses, setWarehouses] = useState([]);

  const getWarehouses = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/warehouse/warehouses"
      );
      console.log({ res });
      if (res?.status === 200) {
        setWarehouses(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWarehouses();
  }, []);
  return { warehouses };
};
