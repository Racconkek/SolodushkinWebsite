const path = require('path');

const config = require('config');
const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes.js');


const publicDir = path.join(__dirname, 'public');
if (config.get('debug')) {
    console.log(publicDir);
}
// Завести БД
// const url = 'mongodb+srv://' + config.get('dbUsername') +
//     ':' + config.get('dbPassword') + '@studentscluster.yqasi.gcp.mongodb.net/' +
//     config.get('dbName') + '?retryWrites=true&w=majority';

const app = express();
app.use(express.static(publicDir));

routes(app);

app.use((err, _req, res, _next) => {
    console.error(err.stack);
    res.sendStatus(500);
});


const port = config.get('port');
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});


// После того как появитс БД
// mongoose.connect(url, {useUnifiedTopology: true}, err => {
//     if (err) {
//         return console.log(err);
//     }
//
//     const port = config.get('port');
//     app.listen(port, () => {
//         console.log(`Server started on ${port}`);
//     });
// });



