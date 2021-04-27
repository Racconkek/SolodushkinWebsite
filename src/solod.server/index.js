const path = require('path');

const config = require('config');
const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes.js');


const publicDir = path.join(__dirname, 'public');
if (config.get('debug')) {
    console.log(publicDir);
}

const url = 'mongodb+srv://' + config.get('dbUsername') +
    ':' + config.get('dbPassword') + '@cluster0.ogaxe.mongodb.net/' +
    config.get('dbName') + '?retryWrites=true&w=majority';


const app = express();
app.use(express.static(publicDir));

routes(app);

app.use((req, res) => {
    console.error(req);
    res.sendStatus(500);
});


// const port = config.get('port');
// app.listen(port, () => {
//     console.log(`Server started on ${port}`);
// });

// После того как появитс БД
mongoose.connect(url, {useUnifiedTopology: true}, err => {
    if (err) {
        return console.log(err);
    }

    const port = config.get('port');
    app.listen(port, () => {
        console.log(`Server started on ${port}`);
    });
});



