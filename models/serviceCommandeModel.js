const mongoose = require('mongoose');
const commandeServiceSchema = mongoose.Schema({
    moyen_paiement:{ type: String, required: true },
    user: { type: String, required: true },
    detail: { type: String, required: true },
    adresse: { type: String, required: true },
    telephone:{ type: String, required: true },
    produits:{ type: Array, required: true },
    prix_tot: { type: Number, required: true },
}, { timestamps: true });
module.exports = mongoose.model('commande_services', commandeServiceSchema);