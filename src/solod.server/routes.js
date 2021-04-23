const getHome = require('./controllers/getHome.js');
const getBiography = require('./controllers/getBiography.js');
const getConferences = require('./controllers/getConferences.js');
const getContacts = require('./controllers/getContacts.js');
const getCourse = require('./controllers/getCourse.js');
const getProjects = require('./controllers/getProjects.js');
const getPublications = require('./controllers/getPublications.js');

module.exports = (app) => {
    app.get('/course/:name', getCourse);
    app.get('/conferences', getConferences);
    app.get('/biography', getBiography);
    app.get('/publications', getPublications);
    app.get('/projects', getProjects);
    app.get('/contacts', getContacts);
    app.use('*', getHome);
};

