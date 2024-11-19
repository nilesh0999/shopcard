import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  TextField,
  Button,
  Typography,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import { grey, blue, blueGrey } from "@mui/material/colors";

interface AuthFormProps {
  title: string; // "Sign Up" or "Login"
  btnTitle?: string;
  onSubmit: SubmitHandler<AuthFormInputs>;
}

interface AuthFormInputs {
  email: string;
  password: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ title, onSubmit, btnTitle }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormInputs>();

  const backgroundStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "92vh",
    backgroundImage: `url(/ecommerce-bg.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
  };

  useEffect(() => {
    // Prevent body overflow
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto"; // Restore default overflow behavior when component unmounts
    };
  }, []);

  return (
    <div style={backgroundStyle}>
      <Card
        sx={{
          maxWidth: 400,
          margin: "auto",
          mt: 15,
          borderRadius: 2, // Rounded corners
          boxShadow: 3, // Add shadow for depth
          backgroundColor: grey[100], // Light background color
          border: `1px solid ${grey[300]}`, // Subtle border
        }}
      >
        <CardContent sx={{ padding: 4 }}>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{ color: blue[600], fontWeight: "bold" }}
            >
              {title}
            </Typography>
            <span>
              {title === "Login"
                ? "Get access to your Orders, Wishlist and Recommendations"
                : "Sign up with your email to get started"}
            </span>

            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              {...register("email", { required: "Email is required" })}
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{
                mb: 3,
                mt: 3,
                backgroundColor: "white", // White background for input fields
                borderRadius: 1,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: grey[400], // Lighter border
                  },
                },
              }}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              {...register("password", { required: "Password is required" })}
              error={!!errors.password}
              helperText={errors.password?.message}
              sx={{
                mb: 2,
                backgroundColor: "white",
                borderRadius: 1,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: grey[400],
                  },
                },
              }}
            />

            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: blue[600], // Primary button color
                "&:hover": {
                  backgroundColor: blue[700], // Darker on hover
                },
                borderRadius: 1,
                textTransform: "none", // No uppercase text
              }}
            >
              {btnTitle}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthForm;
