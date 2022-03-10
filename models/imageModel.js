const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const userSchema = mongoose.Schema({
  nomFichier: { type: String, required: true },
  user: { type: Object, required: true },
  date_created: { type: Date, required: false },
  date_updated: { type: Date, required: true },
});
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('image', userSchema);