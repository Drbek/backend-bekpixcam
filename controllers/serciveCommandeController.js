const ServiceCommande = require('../models/serviceCommandeModel');
exports.createServiceCommande = (req, res, next) => {
  delete req.body._id
        const serviceCommande = new ServiceCommande({
          ...req.body
        });
        serviceCommande.save()
          .then(() => res.status(201).json({ message: 'ServiceCommande enregistré !' }))
          .catch(error => res.status(400).json({ error }));
      
  
}
exports.getAllServiceCommande=(req, res, next) => {
    ServiceCommande.find()
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
}
exports.getOneServiceCommande=(req, res, next) => {
    ServiceCommande.findOne({ _id: req.params.id })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
}
exports.deleteOneServiceCommande=(req, res, next) => {
    ServiceCommande.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'ServiceCommande supprimé !'}))
      .catch(error => res.status(400).json({ error }));
}
exports.updateOneServiceCommande=(req, res, next) => {
    ServiceCommande.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'ServiceCommande modifié !'}))
      .catch(error => res.status(400).json({ error }));
}
