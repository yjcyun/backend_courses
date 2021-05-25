const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();
/**
 * route: '/admin/add-product'
 * request: GET
 */
router.get('/add-product', adminController.getAddProduct);

/**
 * route: '/admin/add-product'
 * request: POST
 */
router.post('/add-product', adminController.postAddProduct);

/**
 * route: '/admin/products'
 * request: GET
 */
router.get('/products', adminController.getProducts);

module.exports = router;
