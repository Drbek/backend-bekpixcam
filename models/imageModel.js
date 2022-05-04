const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const userSchema = mongoose.Schema({
  urlImage: { type: String, required: true },
  userId: { type: String, required: true },
}, { timestamps: true });
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('images', userSchema);