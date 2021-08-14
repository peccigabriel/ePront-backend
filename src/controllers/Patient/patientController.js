import connection from '../../database/connection';
import { randomBytes } from 'crypto';

//Lógica da rota para cadastrar pacientes c/ vinculo ao nome do médico da tabela medicals
export async function create(request, response) {
  const {
    namePat,
    rgPat,
    datanascPat,
    telPat,
    cityPat,
    ufPat,
    historyPat,
    crm_medical,
  } = request.body;
  // const crm_medical = request.body;
  const idPat = randomBytes(4).toString('HEX');

  const crmMedical = await connection('medicals')
    .where('crmMed', crm_medical)
    .select('crmMed')
    .first();

  if (!crm_medical || !crmMedical || crm_medical !== crmMedical.crmMed) {
    return response.status(401).json({ error: 'Médico não encontrado.' });
  }

  await connection('patients').insert({
    idPat,
    namePat,
    rgPat,
    datanascPat,
    telPat,
    cityPat,
    ufPat,
    historyPat,
    crm_medical,
  });

  return response.json({ idPat });
}
//Lógica da rota para listar todos os pacientes
export async function index(request, response) {
  const patients = await connection('patients').select('*');
  return response.json(patients);
}
export async function indexSpecif(request, response) {
  const namePat = request.headers.authorization;

  const dados = await connection('patients')
    .select('idPat', 'namePat', 'cityPat', 'ufPat')
    .where('namePat', namePat);
  var idade = await connection('patients')
    .select('datanascPat')
    .where('namePat', namePat);

  const patients = {};

  function splitDate(idade) {
    var formatDate = Object.values(idade[0]);
    var year = formatDate[0].split('/');

    var fullDate = new Date();
    dataAtual = fullDate.getFullYear();

    const datanascPat = { datanascPat: dataAtual - year[2] };

    Object.assign(dados[0], datanascPat);
  }

  splitDate(idade);

  if (patients.length === 0) {
    return response.status(404).json({ error: 'Paciente não encontrado' });
  }

  return response.json(dados);
}
