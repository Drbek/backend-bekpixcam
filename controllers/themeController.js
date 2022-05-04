const Theme = require('../models/themeModel');
exports.createTheme = (req, res, next) => {
  delete req.body._id
        const theme = new Theme({
          ...req.body
        });
        theme.save()
          .then(() => res.status(201).json({ message: 'Theme enregistré !' }))
          .catch(error => res.status(400).json({ error }));
      
  
}
exports.getAllTheme=(req, res, next) => {
    Theme.find()
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
}
exports.getOneTheme=(req, res, next) => {
    Theme.findOne({ _id: req.params.id })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
}
exports.deleteOneTheme=(req, res, next) => {
    Theme.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Theme supprimé !'}))
      .catch(error => res.status(400).json({ error }));
}
exports.updateOneTheme=(req, res, next) => {
    Theme.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Theme modifié !'}))
      .catch(error => res.status(400).json({ error }));
}
