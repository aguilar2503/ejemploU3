const mongoose = require('mongoose');

let productoSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    }
});

const prodModel = mongoose.model('Producto', productoSchema, 'producto');

module.exports = prodModel;