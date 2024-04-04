/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import axios from "axios";
import Router from "next/router";
import { message } from "antd";

export const uesRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleRegister = async (username = null, password = null) => {
    try {
      if (username && password) {
        const res = await axios.post("http://localhost:8080/api/auth/create", {
          username,
          password,
        });
        if (res) {
          Router.push("/login");
        }
      }
    } catch (error) {
      message.error("Register false");
    }
  };

  return { isLoading, handleRegister };
};
