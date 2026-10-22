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
import { loginSchema } from "../../validations/authSchemas";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    try {
      setServerError("");

      const response = await axios.post(
        "https://knowledgeshop.runasp.net/api/auth/Account/Login",
        data
      );

      console.log("Registration successful:", response.data);

      navigate("/home");
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
          Login
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
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
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
            {isSubmitting?"Loading..." : "Login"}
          </Button>

          <Typography
            variant="body2"
            sx={{ textAlign: "center", mt: 3 }}
          >
            Don't have an account?{" "}
            <Link to="/register">Register</Link>
           
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;