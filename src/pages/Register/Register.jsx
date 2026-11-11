import {
  Button,
  Container,
  TextField,
  Typography,
  Box,
  Alert,
} from "@mui/material";

import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validations/authSchemas";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    try {
      setServerError("");

      const response = await axios.post(
        "https://knowledgeshop.runasp.net/api/auth/Account/Register",
        data
      );

      console.log("Registration successful:", response.data);

      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);

      const message = error.response?.data;

      setServerError(
        typeof message === "string"
          ? message
          : message?.message ||
            message?.title ||
            "Registration failed. Please try again."
      );
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5, mb: 5 }}>
      <Box
        sx={{
          bgcolor: "white",
          boxShadow: 4,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          sx={{ textAlign: "center", mb: 3 }}
        >
          Create Account
        </Typography>

        {serverError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {serverError}
          </Alert>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <TextField
            label="Full Name"
            fullWidth
            margin="normal"
            {...register("fullName")}
            error={!!errors.fullName}
            helperText={errors.fullName?.message}
          />

          <TextField
            label="User Name"
            fullWidth
            margin="normal"
            {...register("userName")}
            error={!!errors.userName}
            helperText={errors.userName?.message}
          />

          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            label="Phone Number"
            type="tel"
            fullWidth
            margin="normal"
            {...register("phoneNumber")}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={isSubmitting}
            sx={{ mt: 3 }}
          >
            {isSubmitting?"Loading..." : "Register"}
          </Button>

          <Typography
            variant="body2"
            sx={{ textAlign: "center", mt: 3 }}
          >
            Already have an account?{" "}
            <Link to="/login">Login</Link>
             <Link to="/sendcode">SendCode</Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Register;