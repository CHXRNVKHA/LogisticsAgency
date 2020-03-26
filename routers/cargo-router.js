const express = require('express');

const CargoController = require('../controllers/cargo-controller')
const cargoController = new CargoController();

const router = new express.Router();

//router.get('/', cargoController.getCargos);
//router.get('/cargos', cargoController.getCargos);
//router.get('/:id', cargoController.getCargoById);
//router.post('/cargos', cargoController.createCargo);
router.post('/cargo', cargoController.createCargo);
//router.put('/', cargoController.updateCargo);
//router.delete('/', cargoController.deleteCargo);
//router.post('/save', cargoController.saveChanges);

module.exports = router;