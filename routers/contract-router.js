const express = require('express');
const auth = require('../middleware/auth');

const ContractController = require('../controllers/contract-controller')
const contractController = new ContractController();

const router = new express.Router();

//router.get('/', contractController.getContracts);
//router.get('/contracts', contractController.getContracts);
//router.get('/:id', contractController.getContractById);
//router.post('/contracts', contractController.createContract);
router.post('/add', auth, contractController.addContract);
//router.put('/', contractController.updateContract);
//router.delete('/', contractController.deleteContract);
//router.post('/save', contractController.saveChanges);

module.exports = router;