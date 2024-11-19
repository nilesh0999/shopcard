import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";

interface SignUpInputs {
  email: string;
  password: string;
}

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSignUp = async (data: SignUpInputs) => {
    try {
      await axios.post("https://example.com/api/register", data);
      alert("Registration successful!");
      navigate("/login"); // Redirect to login page after successful registration
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Failed to register. Please try again.");
    }
  };

  return (
    <AuthForm
      title="Looks like you're new here!"
      btnTitle="Sign Up"
      onSubmit={handleSignUp}
    />
  );
};

export default SignUpPage;
