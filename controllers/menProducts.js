const Products = require('../models/products');

module.exports.allProducts = async(req, res) => {
    const products = await Products.find({});
    res.render('pages/men', { products })
}

module.exports.runningShoes = async(req, res) => {
    const products = await Products.find({});
    res.render('pages/runshoesM', { products })
}

module.exports.everydaySneakers = async(req, res) => {
    const products = await Products.find({});
    res.render('pages/everydayM', { products })
}