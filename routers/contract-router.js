const express = require('express');

const ContractController = require('../controllers/contract-controller')
const contractController = new ContractController();

const router = new express.Router();

//router.get('/', contractController.getContracts);
//router.get('/contracts', contractController.getContracts);
//router.get('/:id', contractController.getContractById);
//router.post('/contracts', contractController.createContract);
//router.post('/', contractController.createContract);
//router.put('/', contractController.updateContract);
//router.delete('/', contractController.deleteContract);
//router.post('/save', contractController.saveChanges);

module.exports = router;