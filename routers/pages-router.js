const express = require('express');
const path = require('path');
const auth = require('../middleware/auth');

const router = new express.Router();

router.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'pages','signIn','index.html'));
});
router.get('/login', async (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'pages','signIn','index.html'));
});
router.get('/registry', async (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'pages','registration','index.html'));
});
router.get('/main', auth, async (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'pages','main','index.html'));
});

module.exports = router