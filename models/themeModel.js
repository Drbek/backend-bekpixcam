const mongoose = require('mongoose');
const themeSchema = mongoose.Schema({
    name: { type: String, required: true },
    img:{ type: String, required: true },
}, { timestamps: true });
module.exports = mongoose.model('themes', themeSchema);