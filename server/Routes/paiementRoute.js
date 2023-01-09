
const express = require('express')
const router = express.Router()

const {addPaiement,getAllPaiement,getPaiementById,updatePaiement,deletePaiement} = require('../Controllers/PaiementController')

// api/paiement
router.post('/',addPaiement)

// api/paiement
router.get('/', getAllPaiement);

// api/paiement/:id
router.get('/:id', getPaiementById);

// api/paiement/:id
router.put('/:id', updatePaiement);

// api/paiement/:id
router.delete('/:id', deletePaiement);

module.exports = router