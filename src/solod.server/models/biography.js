const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const BiographySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    data: {
        type: Schema.Types.Mixed,
        required: true
    }
});

const BiographyModel = mongoose.model('Biography', BiographySchema);

module.exports = BiographyModel;
