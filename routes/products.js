const express = require('express');
const router = express.Router();
const products = require('../controllers/products');
const Product = require('../models/products')



router.get('/', products.home)

router.get('/shop', products.shop)

router.get('/about', products.about)

router.get('/:id', products.detail)

router.get('/:id/cart', products.addToCart)

module.exports = router;