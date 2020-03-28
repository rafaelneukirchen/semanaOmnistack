const express = require('express');
const routes = express.Router();
const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const sessionController = require('./controllers/sessionController');
const profileController = require('./controllers/profileController');

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/profile', profileController.index);

routes.post('/session', sessionController.create);

routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.index);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;