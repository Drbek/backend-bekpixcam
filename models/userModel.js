const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const userSchema = mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  photoUrl: { type: String, required: false },
  userId: { type: String, required: true },
  actif: { type: Boolean, required: true },
  password: { type: String, required: false },
  email: { type: String, required: true ,unique:true},
  region: { type: String, required: false },
  adresse: { type: String, required: false },
});
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('users', userSchema);