const mongoose = require('mongoose');
const moyenPaiementSchema = mongoose.Schema({
    name:{ type: String, required: true },
    available:{ type: Boolean, required: true },
}, { timestamps: true });
module.exports = mongoose.model('moyen_paiements', moyenPaiementSchema);