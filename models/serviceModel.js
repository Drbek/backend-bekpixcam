const mongoose = require('mongoose');
const serviceSchema = mongoose.Schema({
    name: { type: String, required: true },
    evenement: { type: String, required: true },
    type:{ type: String, required: true },
}, { timestamps: true });
module.exports = mongoose.model('services', serviceSchema);