const express = require('express');
const router = express.Router();
const moyenPaiementController = require('../controllers/moyenPaiementController')
const auth = require('../middleware/auth');
router.post('/',auth,moyenPaiementController.createMoyenPaiement);
router.put('/:id',auth, moyenPaiementController.updateOneMoyenPaiement);
router.get('/',auth, moyenPaiementController.getAllMoyenPaiement);
router.delete('/:id',auth, moyenPaiementController.deleteOneMoyenPaiement);
router.get('/:id',auth, moyenPaiementController.getOneMoyenPaiement);
module.exports = router;