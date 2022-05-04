const Concours = require('../models/concoursModel');
exports.createConcours = (req, res, next) => {
  delete req.body._id
        const concours = new Concours({
          ...req.body
        });
        concours.save()
          .then(() => res.status(201).json({ message: 'Concours enregistré !' }))
          .catch(error => res.status(400).json({ error }));
      
  
}
exports.getAllConcours=(req, res, next) => {
    Concours.find()
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
}
exports.getOneConcours=(req, res, next) => {
    Concours.findOne({ _id: req.params.id })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
}
exports.deleteOneConcours=(req, res, next) => {
    Concours.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Concours supprimé !'}))
      .catch(error => res.status(400).json({ error }));
}
exports.updateOneConcours=(req, res, next) => {
    Concours.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Concours modifié !'}))
      .catch(error => res.status(400).json({ error }));
}
