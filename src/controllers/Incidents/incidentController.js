import connection from '../../database/connection';
import crypto from 'crypto';

//Logica para criação dos incidents
export async function create(request, response) {
  const { dataIncident, descIncident, diagIncident, namePatient } =
    request.body;
  const idMedical = request.headers.authorization;

  const id_medical = await connection('medicals')
    .where('idMed', idMedical)
    .select('idMed')
    .first();

  if (!idMedical || !id_medical || idMedical !== id_medical.idMed) {
    return response.status(401).json({ error: 'Médico não encontrado.' });
  }

  const [id] = await connection('incidents').insert({
    namePatient,
    dataIncident,
    descIncident,
    diagIncident,
    idMedical,
  });
  return response.json({ id });
}

//Lógica da rota para listar todos os incidents
export async function index(request, response) {
  const incidents = await connection('incidents').select('*');
  return response.json(incidents);
}
