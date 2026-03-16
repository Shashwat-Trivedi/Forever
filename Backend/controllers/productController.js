import asyncHandler from "../config/asyncHandler.js";
import { ApiError } from "../config/ApiError.js";
import { ApiResponse } from "../config/ApiResponse.js";
import { uploadOnCloudnary } from "../config/cloudnary.js";
import { Product } from "../models/product.model.js";


const addProduct = asyncHandler(async (req, res) => {
  // Logic to add a new product

  const {name , description , price , category , subCategory , size , bestseller} = req.body;

  const image1 = req.files?.image1?.[0];
  const image2 = req.files?.image2?.[0];
  const image3 = req.files?.image3?.[0];
  const image4 = req.files?.image4?.[0];

  if (!name || !description || !price || !category || !subCategory || !size || !image1 ) {
    return res.status(400).json(new ApiError(400, 'All fields are required'));
  }

  const images = [image1, image2, image3, image4].filter((item) => item != undefined);

  const imageURLs = await Promise.all(
    images.map(async (image) => {
      const result = await uploadOnCloudnary(image.path);
      return result?.secure_url;
    })
  );

  if (!imageURLs.length) {
    return res.status(400).json(new ApiError(400, 'Failed to upload images'));
  }

  try {
    const product = await Product.create({
      name,
      description,
      price : Number(price),
      category,
      subCategory,
      sizes : JSON.parse(size),
      bestseller : bestseller === 'true' ? true : false,
      image: imageURLs,
      date: Date.now(),
    });

    return res.status(200).json(new ApiResponse(200, product, 'Product added successfully'));
  } catch (error) {
    return res.status(500).json(new ApiError(500, 'Failed to add product'));
  }


});
 
const listProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();

  if (!products.length) {
    return res.status(404).json(new ApiError(404, 'No products found'));
  }

  return res.status(200).json(new ApiResponse(200, products, 'Products fetched successfully'));
});

const removeProduct = asyncHandler(async (req, res) => {
  // Logic to remove a product

  const { id } = req.body;
  if (!id) {
    return res.status(400).json(new ApiError(400, 'Product ID is required'));
  }
  
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    return res.status(404).json(new ApiError(404, 'Product not found'));
  }

  return res.status(200).json(new ApiResponse(200, null, 'Product removed successfully'));
});

const singleProduct = asyncHandler(async (req, res) => {
  // Logic to get a single product
  const { id } = req.body;
  if (!id) {
    return res.status(400).json(new ApiError(400, 'Product ID is required'));
  }

  const product = await Product.findById(id);
  if (!product) {
    return res.status(404).json(new ApiError(404, 'Product not found'));
  }

  return res.status(200).json(new ApiResponse(200, product, 'Product fetched successfully'));
});


export { listProducts, removeProduct, addProduct , singleProduct };