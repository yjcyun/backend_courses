const express = require('express');
const shopController = require('../controllers/shop');

const router = express.Router();

/**
 * route: '/'
 * request: GET
 */
router.get('/', shopController.getIndex);

/**
 * route: '/products'
 * request: GET
 */
router.get('/products', shopController.getProducts);

/**
 * route: '/cart'
 * request: GET
 */
router.get('/cart', shopController.getCart);

/**
 * route: '/checkout'
 * request: GET
 */
router.get('/checkout', shopController.getCheckout);

/**
 * route: '/orders'
 * request: GET
 */
router.get('/orders', shopController.getOrders);

module.exports = router;
