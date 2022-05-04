const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const userSchema = mongoose.Schema({
  raison_sociale: { type: String, required: true },
  location: { type: Object, required: true },
  logo_url: { type: String, required: false },
  certified: { type: Boolean, required: true },
  password: { type: String, required: false },
  email: { type: String, required: true ,unique:true },
  telephone: { type: String, required: false },
  agents: { type: Array, required: false },
  role: { type: Array, required: true },
  connexion:{type: Array, required:true }
}, { timestamps: true });
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('users', userSchema);