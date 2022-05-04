const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')
const auth = require('../middleware/auth');
router.post('/',auth,productController.createProduct);
router.put('/:id',auth, productController.updateOneProduct);
router.get('/',auth, productController.getAllProduct);
router.delete('/:id',auth, productController.deleteOneProduct);
router.get('/:id',auth, productController.getOneProduct);
module.exports = router;