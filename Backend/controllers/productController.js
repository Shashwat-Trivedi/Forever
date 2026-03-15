import asyncHandler from "../config/asyncHandler.js";


const addProduct = asyncHandler(async (req, res) => {
  // Logic to add a new product
});

const listProducts = asyncHandler(async (req, res) => {
  // Logic to list products
});

const removeProduct = asyncHandler(async (req, res) => {
  // Logic to remove a product
});

const singleProduct = asyncHandler(async (req, res) => {
  // Logic to get a single product
});


export { listProducts, removeProduct, addProduct , singleProduct };