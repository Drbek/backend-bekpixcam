const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const auth = require('../middleware/auth');
const authCreateuser = require('../middleware/authCreateUser');
router.post('/login', userController.login);
router.post('/',authCreateuser,userController.createUser);
router.put('/:id',auth(['ADMIN','ENTERPRISE','AGENT','USER']), userController.updateOneUser);
router.get('/',auth(['ADMIN']), userController.getAllUser);
router.delete('/:id',auth(['ADMIN','ENTERPRISE','AGENT','USER']), userController.deleteOneUser);
router.get('/:id',auth(['ADMIN','ENTERPRISE','AGENT','USER']), userController.getOneUser);
module.exports = router;