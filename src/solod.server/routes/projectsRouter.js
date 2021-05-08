const projectsRouter = require('express').Router();
const { getProjects } = require('../controllers');

projectsRouter.get('/', getProjects);
// projectsRouter.post('/', postProject);

module.exports = projectsRouter;
