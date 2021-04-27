const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const PublicationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

const PublicationModel = mongoose.model('Publication', PublicationSchema);

module.exports = PublicationModel;
