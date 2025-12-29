import asyncHandler from "../config/asyncHandler.js";

// Route for user Register
const Register = asyncHandler(async (req, res) => {
  // Registration logic here
});

// Route for user Login
const Login = asyncHandler(async (req, res) => {
  // Login logic here
});

// Route for admin Login
const AdminLogin = asyncHandler(async (req, res) => {
  // Admin login logic here
});

// Route for user Logout
const Logout = asyncHandler(async (req, res) => {
  // Logout logic here
});

export { Register, Login, AdminLogin, Logout };
