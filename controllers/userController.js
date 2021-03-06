const User = require('../models/userModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
exports.createUser = (req, res, next) => {
  delete req.body._id;
  
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        req.body.password = hash
        req.body.actif = false
        const user = new User({
          ...req.body
        });
        user.save()
          .then(() => res.status(201).json({ message: 'User enregistré !' }))
          .catch(error => res.status(400).json({ error }));
      })
  
}
exports.getAllUser=(req, res, next) => {
    User.find()
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
}
exports.getOneUser=(req, res, next) => {
    User.findOne({ _id: req.params.id })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
}
exports.deleteOneUser=(req, res, next) => {
    User.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'User supprimé !'}))
      .catch(error => res.status(400).json({ error }));
}
exports.updateOneUser=(req, res, next) => {
    User.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'User modifié !'}))
      .catch(error => res.status(400).json({ error }));
}
exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Credentials incorrect !' });
            }
            user_token = jwt.sign(
              { userId: user._id,role:user.role },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' }
            )
            req.body.connexion.user_token=user_token
            req.body.connexion.date = new Date();
            user.connexion.push(req.body.connexion)
            user.save()
            res.status(200).json({
              userId: user._id,
              token: user_token
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };