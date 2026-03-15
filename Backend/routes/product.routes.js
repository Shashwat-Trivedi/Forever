import { Router } from 'express';
import {
  listProducts,
  removeProduct,
  addProduct,
  singleProduct,
} from '../controllers/productController.js';
import { upload } from '../middleware/multer.middleware.js';

const router = Router();

router.post(
  '/add',
  upload.fields([
    { name: image1, maxCount: 1 },
    { name: image2, maxCount: 1 },
    { name: image3, maxCount: 1 },
    { name: image4, maxCount: 1 },
  ]),
  addProduct
);

router.get('/', listProducts);

router.delete('/:id', removeProduct);

router.get('/:id', singleProduct);

export default router;
