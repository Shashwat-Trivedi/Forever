import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: [String], required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    sizes: { type: [String], required: true },
    bestseller: { type: Boolean },
    date: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);

