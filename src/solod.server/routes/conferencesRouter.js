const conferencesRouter = require('express').Router();
const { getConferences } = require('../controllers');

conferencesRouter.get('/', getConferences);
// conferencesRouter.post('/', postConference);

module.exports = conferencesRouter;
