const express = require('express');
const router = express.Router();
const womenProducts = require('../controllers/womenProducts')

router.get('/', womenProducts.allProducts);

router.get('/running-shoes', womenProducts.runningShoes);

router.get('/everyday-sneakers', womenProducts.everydaySneakers);

module.exports = router;