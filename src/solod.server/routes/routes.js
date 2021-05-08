const getHome = require('../controllers/getHome.js');
const biographyRouter = require('./biographyRouter.js')
const conferencesRouter = require('./conferencesRouter.js');
const publicationsRouter = require('./publicationsRouter.js');
const projectsRouter = require('./projectsRouter.js');
// const getContacts = require('./controllers/getContacts.js');
const getCourse = require('../controllers/courses/getCourse.js');

module.exports = (app) => {
    // app.get('/courses', getCourses);
    app.get('/courses/:name', getCourse);
    app.use('/conferences', conferencesRouter);
    app.use('/biography', biographyRouter);
    app.use('/publications', publicationsRouter);
    app.use('/projects', projectsRouter);
    // app.get('/contacts', getContacts);
    app.use('*', getHome);
};

