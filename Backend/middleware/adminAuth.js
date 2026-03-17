import jwt from 'jsonwebtoken';
import { ApiError } from '../config/ApiError.js';
import asyncHandler from '../config/asyncHandler.js';

const adminAuth = asyncHandler(async (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.status(401).json(new ApiError(401, 'Unauthorized: No token provided'));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
        return res.status(401).json(new ApiError(401, 'Unauthorized: Invalid token'));
    }

    if (decoded.email !== process.env.ADMIN_EMAIL || decoded.password !== process.env.ADMIN_PASSWORD) {
        return res.status(401).json(new ApiError(401, 'Unauthorized: Invalid admin credentials'));
    }

    next();
});

export default adminAuth;