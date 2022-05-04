const Categorie = require('../models/categorieModel');
exports.createCategorie = (req, res, next) => {
  delete req.body._id
        const categorie = new Categorie({
          ...req.body
        });
        categorie.save()
          .then(() => res.status(201).json({ message: 'Categorie enregistré !' }))
          .catch(error => res.status(400).json({ error }));
      
  
}
exports.getAllCategorie=(req, res, next) => {
    Categorie.find()
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
}
exports.getOneCategorie=(req, res, next) => {
    Categorie.findOne({ _id: req.params.id })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
}
exports.deleteOneCategorie=(req, res, next) => {
    Categorie.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Categorie supprimé !'}))
      .catch(error => res.status(400).json({ error }));
}
exports.updateOneCategorie=(req, res, next) => {
    Categorie.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Categorie modifié !'}))
      .catch(error => res.status(400).json({ error }));
}
