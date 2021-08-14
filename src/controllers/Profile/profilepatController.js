import connection from '../../database/connection';

export async function index(request, response) {
  const namePatient = request.headers.authorization;

  const incidents = await connection('incidents')
    .where('namePatient', namePatient)
    .select('*');
  const contador = Object.entries(incidents).length;

  if (contador === 0) {
    return response.status(401).json({ error: 'Paciente não encontrado' });
  }
  return response.json(incidents);
}
