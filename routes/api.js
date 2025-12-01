import express from 'express';
import { getProducts } from '../services/productService.js';

const router = express.Router();

//Ruta para obtener productos
router.get('/products', getProducts);

export default router;