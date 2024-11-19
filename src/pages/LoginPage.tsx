import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import Loader from "../components/Loader";
import { toastMessage } from "../helper/customFunction";

interface LoginInputs {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState<any>(false);
  const [count, setCount] = useState<any>(0);

  const handleLogin = async (data: LoginInputs) => {
    setShowLoader(true);
    try {
      if (
        data?.email === "nilgatala@yopmail.com" &&
        data?.password === "reset123"
      ) {
        setTimeout(() => {
          setShowLoader(false);
          toastMessage("success", "Login successful!", 2000);
        }, 3000);
        setTimeout(() => {
          localStorage.setItem("isAuthenticated", "true");
          window.location.href = "/";
          setCount(count + 1);
        }, 4000);
      } else {
        setTimeout(() => {
          setShowLoader(false);
          toastMessage("error", "Invalid credentials!", 2000);
        }, 2000);
      }
    } catch (error) {
      toastMessage("error", "Invalid credentials. Please try again", 2000);
    }
  };

  return (
    <>
      <Loader showLoader={showLoader} />
      <AuthForm title="Login" btnTitle="Login" onSubmit={handleLogin} />;
    </>
  );
};

export default LoginPage;
