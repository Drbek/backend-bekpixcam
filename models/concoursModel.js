const mongoose = require('mongoose');
const concoursSchema = mongoose.Schema({
    name: { type: String, required: true },
    periode: { type: String, required: true },
    listePostulants:{ type: Array, required: true },
    date_end: { type: Date, required: false },
}, { timestamps: true });
module.exports = mongoose.model('concours', concoursSchema);