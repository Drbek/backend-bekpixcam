const Product = require('../models/productModel');
exports.createProduct = (req, res, next) => {
  delete req.body._id
        const product = new Product({
          ...req.body
        });
        product.save()
          .then(() => res.status(201).json({ message: 'Product enregistré !' }))
          .catch(error => res.status(400).json({ error }));
      
  
}
exports.getAllProduct=(req, res, next) => {
    Product.find()
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
}
exports.getOneProduct=(req, res, next) => {
    Product.findOne({ _id: req.params.id })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
}
exports.deleteOneProduct=(req, res, next) => {
    Product.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Product supprimé !'}))
      .catch(error => res.status(400).json({ error }));
}
exports.updateOneProduct=(req, res, next) => {
    Product.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Product modifié !'}))
      .catch(error => res.status(400).json({ error }));
}
