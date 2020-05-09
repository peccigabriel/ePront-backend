const express = require('express');
const routes = express.Router();

//Importanto logica das rotas criadas nas controllers
const medicalController = require('./controllers/Medical/medicalController');
const patientController = require('./controllers/Patient/patientController');
const incidentController = require('./controllers/Incidents/incidentController');
const profilemedController = require('./controllers/Profile/profilemedController');
const profilepatController = require('./controllers/Profile/profilepatController');
const sessionmedController = require('./controllers/Session/sessionmedController');
const sessionpatController = require('./controllers/Session/sessionpatController');

//Criando rota de insert/select para medicos
routes.post('/medicals', medicalController.create);
routes.get('/medicals', medicalController.index);

//Criando a rota de insert/select/delete para pacientes
routes.post('/patients', patientController.create);
routes.get('/patients', patientController.index);

//Criando rota de insert/select para incidents
routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.index);

//Criando rota de listagem especifica(casos), para medicos
routes.get('/profilemed', profilemedController.index);

//Criando rota de listagem especifica(casos), para pacientes
routes.get('/profilepat', profilepatController.index);

//rota validação de login dos medicos
routes.post('/sessionmed', sessionmedController.create);

//rota de validação de login dos pacientes
routes.post('/sessionpat', sessionpatController.create);


module.exports = routes;