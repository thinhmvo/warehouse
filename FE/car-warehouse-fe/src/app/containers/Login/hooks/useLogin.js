/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import axios from "axios";
import Router from "next/router";
import { message } from "antd";

export const uesLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async (username = null, password = null) => {
    try {
      if (username && password) {
        const res = await axios.post("http://localhost:8080/api/auth/login", {
          username,
          password,
        });
        if (res) {
          Router.push("/home");
        }
      }
    } catch (error) {
      message.error("Login false");
    }
  };

  return { isLoading, handleLogin };
};
