const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
    title: String,
    price: Number,
    description: String,
    image: String,
    type: {
        type: String,
        enum: ['F', 'M']
    },
    category: {
        type: String,
        enum: ['running shoes', 'everyday sneakers']
    }
});

module.exports = mongoose.model('Product', ProductSchema);