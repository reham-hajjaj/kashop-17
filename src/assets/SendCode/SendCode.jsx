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
import { sendcodeSchema } from "../../validations/authSchemas";
import axios from "axios";

function SendCode() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(sendcodeSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    try {
      setServerError("");
      setSuccessMessage("");

      const response = await axios.post(
        "https://knowledgeshop.runasp.net/api/auth/Account/SendCode",
        data
      );

      console.log("Send code response:", response.data);

      setSuccessMessage(
        response.data?.message ||
          "Verification code sent successfully."
      );

      // انتقلي للرئيسية فقط إذا كان هذا هو المطلوب في مشروعك.
      // navigate("/");
    } catch (error) {
      console.error("Send code error:", error);

      const message = error.response?.data;

      setServerError(
        typeof message === "string"
          ? message
          : message?.message ||
              message?.title ||
              "Failed to send verification code. Please try again."
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
          Send Verification Code
        </Typography>

        {serverError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {serverError}
          </Alert>
        )}

        {successMessage && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {successMessage}
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

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={isSubmitting}
            sx={{ mt: 3 }}
          >
            {isSubmitting ? "Sending..." : "Send Code"}
          </Button>

          <Typography
            variant="body2"
            sx={{ textAlign: "center", mt: 3 }}
          >
            Don't have an account?{" "}
            <Link to="/register">Register</Link>
          </Typography>

          <Typography
            variant="body2"
            sx={{ textAlign: "center", mt: 2 }}
          >
            Remember your password?{" "}
            <Link to="/login">Login</Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default SendCode;