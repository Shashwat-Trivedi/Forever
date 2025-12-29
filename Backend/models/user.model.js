import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} },
  },
  { minimize: false, timestamps: true }
);

userSchema.pre('findOneAndUpdate',async function (next) {} )

export const User = mongoose.model('User', userSchema);
