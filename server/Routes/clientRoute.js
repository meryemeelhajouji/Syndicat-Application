
const express = require('express')
const router = express.Router()

const {addClient,getAllClient,getClientById,updateClient,deleteClient} = require('../Controllers/ClientController')

// api/client
router.post('/',addClient)

// api/client
router.get('/', getAllClient);

// api/client/:id
router.get('/:id', getClientById);

// api/client/:id
router.put('/:id', updateClient);

// api/client/:id
router.delete('/:id', deleteClient);

module.exports = router