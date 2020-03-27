const express = require('express');

const PagesController = require('../controllers/pages-controller');
const pagesController = new PagesController();

const router = new express.Router();

router.get('/create', function(req, res){
    res.render('/pages/Registration/index.html');
});