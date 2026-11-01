import * as yup from "yup";

export const registerSchema = yup.object().shape({
  fullName: yup
    .string()
    .trim()
    .required("Full name is required")
    .min(3, "Full name must be at least 3 characters"),

  userName: yup
    .string()
    .trim()
    .required("User name is required")
    .min(3, "User name must be at least 3 characters"),

  email: yup
    .string()
    .trim()
    .email("Please enter a valid email")
    .required("Email is required"),

  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^\+?[0-9]{9,15}$/, "Please enter a valid phone number"),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Za-z]/, "Password must contain a letter")
    .matches(/[0-9]/, "Password must contain a number"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email")
    .required("Email is required"),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Za-z]/, "Password must contain a letter")
    .matches(/[0-9]/, "Password must contain a number"),
});

export const sendcodeSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email")
    .required("Email is required"),
});
export const resetPasswordSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),

  code: yup
    .string()
    .required("Code is required"),

  newPassword: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("New password is required"),
});