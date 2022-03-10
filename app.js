const express = require('express');
const User = require('./models/userModel');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const path = require('path');
mongoose.connect('mongodb://localhost:27017/bekpixdb',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
const app = express();
app.use(express.json());

app.use((req, res, next) => {
    console.log('Requête reçue !');
    next();
  });
app.use('/api/user', userRoutes);
  /* app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  }); */
  app.use('/images', express.static(path.join(__dirname, 'images')));
  
  app.get((req, res, next) => {
    console.log('Réponse envoyée avec succès !');
  });
module.exports = app;