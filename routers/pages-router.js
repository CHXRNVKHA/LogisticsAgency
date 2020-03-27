const express = require('express');
const path = require('path');


const router = new express.Router();

router.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'pages','registration','index.html'));
});

module.exports = router