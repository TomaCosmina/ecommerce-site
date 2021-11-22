const express = require('express');
const router = express.Router();
const menProducts = require('../controllers/menProducts');


router.get('/', menProducts.allProducts);

router.get('/running-shoes', menProducts.runningShoes);

router.get('/everyday-sneakers', menProducts.everydaySneakers);

module.exports = router;