const express = require('express');

const CargoController = require('../controllers/cargo-controller')
const cargoController = new CargoController();

const router = new express.Router();

router.get('/', cargoController.getAllCargos);
router.post('/add', cargoController.addCargo);
router.put('/update', cargoController.updateCargo);
router.delete('/delete/:id', cargoController.deleteCargo);

module.exports = router;