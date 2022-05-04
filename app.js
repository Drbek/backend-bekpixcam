const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const imgRoute = require('./routes/imageRoute')
const productRoute = require('./routes/productRoute')
const serviceRoute = require('./routes/serviceRoute')
const themeRoute = require('./routes/themeRoute')
const moyenPaiementRoute = require('./routes/moyenPaiementRoute')
const commandeRoute = require('./routes/commandeRoute')
const categorieRoute = require('./routes/categorieRoute')
const commandServiceRoute = require('./routes/commandeServiceRoute')
const concoursRoute = require('./routes/concoursRoute')
const cors = require('cors')

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
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
}); 
app.options('*', cors())
app.use('/api/images', express.static(path.join(__dirname, 'images')),imgRoute);
app.use('/api/user', userRoutes);
app.use('/api/products',productRoute);
app.use('/api/commandes',commandeRoute);
app.use('/api/moyen_paiements',moyenPaiementRoute);
app.use('/api/themes',themeRoute);
app.use('/api/catégories',categorieRoute);
app.use('/api/commande_services',commandServiceRoute);
app.use('/api/services', serviceRoute);
app.use('/api/concours',concoursRoute);
   

  
  app.get((req, res, next) => {
    console.log('Réponse envoyée avec succès !');
  });
module.exports = app;