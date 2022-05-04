const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const userSchema = mongoose.Schema({
  nom: { type: String, required: false },
  prenom: { type: String, required: false },
  photo_url: { type: String, required: false },
  actif: { type: Boolean, required: false ,default:false },
  password: { type: String, required: false },
  email: { type: String, required: true, unique: false },
  telephone: { type: String, required: true ,unique:true },
  role: { type: Array, required: true },
  raison_sociale: { type: String, required: false },
  poste_agent: { type: String, required: false },
  certified_entrepise: { type: Boolean, required: true, default:false },
  location_userOrEntreprise: { type: Object, required: false },
  enterprise_id:{ type: String, required: false },
  connexion:{type: Array, required:true }
}, { timestamps: true });
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('users', userSchema);