import connection from '../../database/connection';

export async function create(request, response) {
  const { id } = request.body;
  const idMed = await connection('medicals')
    .where('idMed', id)
    .select('nameMed', 'crmMed')
    .first();
  // const medCount = Object.entries(idMed).length;
  if (!idMed) {
    return response
      .status(400)
      .json({ error: 'Médico não encontrado no sistema' });
  } else {
    return response.json(idMed);
  }
}
