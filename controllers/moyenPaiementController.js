const MoyenPaiement = require('../models/moyenPaiementModel');
exports.createMoyenPaiement = (req, res, next) => {
  delete req.body._id
        const moyenPaiement = new MoyenPaiement({
          ...req.body
        });
        moyenPaiement.save()
          .then(() => res.status(201).json({ message: 'MoyenPaiement enregistré !' }))
          .catch(error => res.status(400).json({ error }));
      
  
}
exports.getAllMoyenPaiement=(req, res, next) => {
    MoyenPaiement.find()
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
}
exports.getOneMoyenPaiement=(req, res, next) => {
    MoyenPaiement.findOne({ _id: req.params.id })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
}
exports.deleteOneMoyenPaiement=(req, res, next) => {
    MoyenPaiement.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'MoyenPaiement supprimé !'}))
      .catch(error => res.status(400).json({ error }));
}
exports.updateOneMoyenPaiement=(req, res, next) => {
    MoyenPaiement.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'MoyenPaiement modifié !'}))
      .catch(error => res.status(400).json({ error }));
}
