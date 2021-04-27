const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

const ProjectModel = mongoose.model('Project', ProjectSchema);

module.exports = ProjectModel;
