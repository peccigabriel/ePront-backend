import { Router } from 'express';
const routes = Router();

//Importanto logica das rotas criadas nas controllers
import { create, index } from './controllers/Medical/medicalController';
import {
  create as _create,
  index as _index,
  indexSpecif,
} from './controllers/Patient/patientController';
import {
  create as __create,
  index as __index,
} from './controllers/Incidents/incidentController';
import { index as ___index } from './controllers/Profile/profilemedController';
import { index as ____index } from './controllers/Profile/profilepatController';
import { create as ___create } from './controllers/Session/sessionmedController';
import { create as ____create } from './controllers/Session/sessionpatController';

//Criando rota de insert/select para medicos
routes.post('/medicals', create);
routes.get('/medicals', index);

//Criando a rota de insert/select/delete para pacientes
routes.post('/patients', _create);
routes.get('/patients', _index);
routes.get('/patientspat', indexSpecif);

//Criando rota de insert/select para incidents
routes.post('/incidents', __create);
routes.get('/incidents', __index);

//Criando rota de listagem especifica(casos), para medicos
routes.get('/profilemed', ___index);

//Criando rota de listagem especifica(casos), para pacientes
routes.get('/profilepat', ____index);

//rota validação de login dos medicos
routes.post('/sessionmed', ___create);

//rota de validação de login dos pacientes
routes.post('/sessionpat', ____create);

export default routes;
