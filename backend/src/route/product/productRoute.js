import express from 'express';
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
} from '../../controller/product/productController.js';
import upload from '../../middleware/multerConfig.js';

const router = express.Router();

// Create a product (with image upload)
router.post('/', upload.single('image'), createProduct);
// Get all products
router.get('/', getProducts);
// Get a product by ID
router.get('/:id', getProductById);
// Update a product (with image upload)
router.put('/:id', upload.single('image'), updateProduct);
// Delete a product
router.delete('/:id', deleteProduct);

export { router as productRouter }; 