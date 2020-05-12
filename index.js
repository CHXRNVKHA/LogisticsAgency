const express = require('express');
const router = require('./routers/export-router');
const auth = require('../LogisticsAgency/middleware/auth');
const path = require('path');

const app = express();
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

//gregre//
app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'pages', 'signIn')));
app.use('/login', express.static(path.join(__dirname, 'pages', 'signIn')));
app.use('/main', auth, express.static(path.join(__dirname, 'pages', 'main')));
app.use('/registry', express.static(path.join(__dirname, 'pages', 'registration')));
app.use('/registry', async (req, res) => {
    await res.sendFile(path.join(__dirname, 'pages', 'registration', 'index.html'));
})

app.use('/upload', express.static(path.join(__dirname, 'uploads')));

app.use('/cargo', router.cargoRouter);
app.use('/user', router.userRouter);
app.use('/contract', router.contractRouter);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});