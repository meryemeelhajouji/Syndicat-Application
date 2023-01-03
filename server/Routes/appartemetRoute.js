
const express = require('express')
const router = express.Router()

const {addAppartement,getAllAppartement,getAppartementById,updateAppartement,deleteAppartement} = require('../Controllers/AppartementController')

// /api/appartemet
router.post('/', addAppartement)

// /api/appartemet
router.get('/', getAllAppartement);

// /api/appartemet/:id
router.get('/:id', getAppartementById);

// /api/appartemet/:id
router.put('/:id', updateAppartement);

// /api/appartemet/:id
router.delete('/:id', deleteAppartement);

module.exports = router