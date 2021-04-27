const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const ConferenceSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    }
});

const ConferenceModel = mongoose.model('Conference', ConferenceSchema);

module.exports = ConferenceModel;
