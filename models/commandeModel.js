const mongoose = require('mongoose');
const commandeSchema = mongoose.Schema({
    versement:{ type: Object, required: true },
    user:{ type: String, required: true },
    produit: { type: Object, required: true },
    detail: { type: String, required: true },
    adresse: { type: String, required: true },
    telephone:{ type: String, required: true },
    status: { type: Boolean, required: true },
}, { timestamps: true });
module.exports = mongoose.model('commandes', commandeSchema);