const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController')
const auth = require('../middleware/auth');
router.post('/',auth,serviceController.createService);
router.put('/:id',auth, serviceController.updateOneService);
router.get('/',auth, serviceController.getAllService);
router.delete('/:id',auth, serviceController.deleteOneService);
router.get('/:id',auth, serviceController.getOneService);
module.exports = router;