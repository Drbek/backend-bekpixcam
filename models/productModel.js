const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    entrepriseId: { type: String, required: true },
    price: { type: Number, required: true },
    promo: { type: Number, required: true },
    images: { type: Array, required: true },
    
}, { timestamps: true });
module.exports = mongoose.model('products', productSchema);