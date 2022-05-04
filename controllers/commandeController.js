const Commande = require('../models/commandeModel');
exports.createCommande = (req, res, next) => {
  delete req.body._id
        const commande = new Commande({
          ...req.body
        });
        commande.save()
          .then(() => res.status(201).json({ message: 'Commande enregistré !' }))
          .catch(error => res.status(400).json({ error }));
      
  
}
exports.getAllCommande=(req, res, next) => {
    Commande.find()
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
}
exports.getOneCommande=(req, res, next) => {
    Commande.findOne({ _id: req.params.id })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
}
exports.deleteOneCommande=(req, res, next) => {
    Commande.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Commande supprimé !'}))
      .catch(error => res.status(400).json({ error }));
}
exports.updateOneCommande=(req, res, next) => {
    Commande.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Commande modifié !'}))
      .catch(error => res.status(400).json({ error }));
}
