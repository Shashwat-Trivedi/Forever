import asyncHandler from '../config/asyncHandler.js';
import { ApiError } from '../config/ApiError.js';
import { ApiResponse } from '../config/ApiResponse.js';
import { User } from '../models/user.model.js';
import validator from 'validator';

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET )
};


// Route for user Register
const Register = asyncHandler(async (req, res) => {
  // Registration logic here
  // get name , emaiL, Password
  // check for correct inputs with format
  // check if user already exists
  // create new user
  // check for user created and remove password and refresh token
  // senfd response

  const { name, email, password } = req.body;

  if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
    throw new ApiError(400, 'All fields are required');
  }

  if (!validator.isEmail(email)) {
    throw new ApiError(400, "Invalid Email format")
  }
  if (password.length < 8) {
    throw new ApiError(400 , 'Password must be at least 8 characters long');
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new ApiError(409, 'User already exists');
  }


  const user = await User.create({ name, email, password });

  const createdUser = await User.findById(user._id).select('-password');

  const token = createToken(createdUser._id);        

  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, 'User registered successfully' , token));
});

// Route for user Login
const Login = asyncHandler(async (req, res) => {
  // Login logic here
  // get email and password
  // check correct input
  // find user by email
  //check for password
  // generate access token
  // send response

  const { email, password } = req.body;

  if (email.trim() === '' || password.trim() === '') {
    throw new ApiError( 400 , 'All fields are required');
  }

  if (!validator.isEmail(email)) {
    throw new ApiError(400, "Invalid Email format")
  }

  const user = await user.findOne({email});

  if (!user) {
    throw new ApiError(404, 'User not found');
  }

  const isPasswordCorrect = await bcrypt.compare(password , user.password);

  if (!isPasswordCorrect) {
    throw new ApiError(401, 'Invalid password');
  }

  const foundUser = await User.findById(user._id).select('-password');

  const token = createToken(foundUser._id);
  
  return res
    .status(200)
    .json(new ApiResponse(200, foundUser, 'Login successful', token));

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
