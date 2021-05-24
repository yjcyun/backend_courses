const express = require('express');

const router = express.Router();

const products = [];

//'/admin/add-product' => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  });
});

//'/admin/add-product'
// app.use middleware always executes whether incoming request is post / get
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
