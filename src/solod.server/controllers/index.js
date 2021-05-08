const getBiography = require('./biography/getBiography.js');
const getBiographyPartByName = require('./biography/getBiographyPartByName.js');
const getConferences = require('./conferences/getConferences.js');
const getProjects = require('./projects/getProjects.js');
const getPublications = require('./publications/getPublications.js');

module.exports = {
    getBiography,
    getConferences,
    getProjects,
    getPublications,
    getBiographyPartByName
};
