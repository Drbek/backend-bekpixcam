const express = require('express');
const router = express.Router();
const commandeServiceController = require('../controllers/serciveCommandeController')
const auth = require('../middleware/auth');
router.post('/',auth,commandeServiceController.createServiceCommande);
router.put('/:id',auth, commandeServiceController.updateOneServiceCommande);
router.get('/',auth, commandeServiceController.getAllServiceCommande);
router.delete('/:id',auth, commandeServiceController.deleteOneServiceCommande);
router.get('/:id',auth, commandeServiceController.getOneServiceCommande);
module.exports = router;