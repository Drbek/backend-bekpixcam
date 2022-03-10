const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');
router.post('/login', userController.login);
router.post('/', auth,userController.createUser);
router.put('/:id',auth, userController.updateOneUser);
router.get('/',auth, userController.getAllUser);
router.delete('/:id',auth, userController.deleteOneUser);
router.get('/:id',auth, userController.getOneUser);
module.exports = router;