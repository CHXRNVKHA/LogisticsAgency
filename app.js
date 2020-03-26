const express = require('express');
const router = require('./routers/export-router');


const app = express();
const hostname = '127.0.0.1';
const port = process.env.PORT || 3020;

app.use(express.json());
app.use(express.static(__dirname + '/pages'));
//app.use('/', router.pageRouter);
app.use('/users', router.orderRouter);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});