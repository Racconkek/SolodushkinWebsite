const biographyRouter = require('express').Router();
const { getBiography, getBiographyPartByName } = require('../controllers');

biographyRouter.get('/:name', getBiographyPartByName);
biographyRouter.get('/', getBiography);
// biographyRouter.post('/', postBiographyByName);

module.exports = biographyRouter;
