const Products = require('../models/products');

module.exports.home = async(req, res) => {
    const products = await Products.find({});
    res.render('home', { products })
}

module.exports.shop = async(req, res) => {
    const products = await Products.find({})
    res.render('pages/shop', { products })
}

module.exports.about = (req, res) => {
    res.render('pages/about');
}

module.exports.detail = async(req, res) => {
    const product = await Products.findById(req.params.id);
    res.render('pages/show', { product })
}

module.exports.addToCart = (req, res) => {

    res.render('pages/shoppingCart')
}