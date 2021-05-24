const express = require('express');
const productsController = require('../controllers/products');

const router = express.Router();
/**
 * route: '/admin/add-product'
 * request: GET
 */
router.get('/add-product', productsController.getAddProduct);

/**
 * route: '/admin/add-product'
 * request: POST
 */
router.post('/add-product', productsController.postAddProduct);

module.exports = router;
