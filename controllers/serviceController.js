const Service = require('../models/serviceModel');
exports.createService = (req, res, next) => {
  delete req.body._id
        const service = new Service({
          ...req.body
        });
        service.save()
          .then(() => res.status(201).json({ message: 'Service enregistré !' }))
          .catch(error => res.status(400).json({ error }));
      
  
}
exports.getAllService=(req, res, next) => {
    Service.find()
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
}
exports.getOneService=(req, res, next) => {
    Service.findOne({ _id: req.params.id })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
}
exports.deleteOneService=(req, res, next) => {
    Service.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Service supprimé !'}))
      .catch(error => res.status(400).json({ error }));
}
exports.updateOneService=(req, res, next) => {
    Service.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Service modifié !'}))
      .catch(error => res.status(400).json({ error }));
}
