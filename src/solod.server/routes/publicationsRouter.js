const publicationsRouter = require('express').Router();
const { getPublications }= require('../controllers');

publicationsRouter.get('/', getPublications);
// publicationsRouter.post('/', postPublicationsByName);

module.exports = publicationsRouter;
