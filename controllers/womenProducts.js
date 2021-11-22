const Products = require('../models/products');

module.exports.allProducts = async(req, res) => {
    const products = await Products.find({});
    res.render('pages/women', { products })
}

module.exports.runningShoes = async(req, res) => {
    const products = await Products.find({});
    res.render('pages/runshoesF', { products })
}

module.exports.everydaySneakers = async(req, res) => {
    const products = await Products.find({});
    res.render('pages/everydayF', { products })
}