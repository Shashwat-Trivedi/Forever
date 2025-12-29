import asyncHandler from '../config/asyncHandler.js';
import { ApiError } from '../config/ApiError.js';
import { ApiResponse } from '../config/ApiResponse.js';
import { User } from '../models/user.model.js';

// Route for user Register
const Register = asyncHandler(async (req, res) => {
  // Registration logic here
  // get name , emaiL, Password
  // check for correct inputs
  // check if user already exists
  // create new user
  // check for user created and remove password and refresh token
  // senfd response

  const { name, email, password } = req.body;

  if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
    throw new ApiError(400, 'All fields are required');
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new ApiError(409, 'User already exists');
  }

  const user = await User.create({ name, email, password });

  const createdUser = await User.findById(user._id).select('-password');

  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, 'User registered successfully'));
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
