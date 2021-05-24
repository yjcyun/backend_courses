const express = require('express');
const productsController = require('../controllers/products');

const adminData = require('./admin');

const router = express.Router();

/**
 * route: '/'
 * request: GET
 */
router.get('/', productsController.getProducts);

module.exports = router;
