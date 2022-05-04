const express = require('express');
const router = express.Router();
const concoursController = require('../controllers/concoursController')
const auth = require('../middleware/auth');
router.post('/',auth,concoursController.createConcours);
router.put('/:id',auth, concoursController.updateOneConcours);
router.get('/',auth, concoursController.getAllConcours);
router.delete('/:id',auth, concoursController.deleteOneConcours);
router.get('/:id',auth, concoursController.getOneConcours);
module.exports = router;