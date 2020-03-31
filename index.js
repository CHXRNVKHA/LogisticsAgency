const express = require('express');
const router = require('./routers/export-router');
const path = require('path');

const app = express();
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/main', express.static(path.join(__dirname, 'pages', 'main')));
app.use('/registry', express.static(path.join(__dirname, 'pages', 'registration')));
app.use('/login', express.static(path.join(__dirname, 'pages', 'signIn')));
app.use('/', express.static(path.join(__dirname, 'pages', 'signIn')));
//app.use('/', router.pageRouter);
app.use('/cargo', router.cargoRouter);
//app.use('/main', router.pagesRouter);
app.use('/pages', router.pagesRouter);
app.use('/', router.pagesRouter);
app.use('/registry', router.pagesRouter);
//app.use('/login', router.pagesRouter);
app.use('/user', router.userRouter);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});