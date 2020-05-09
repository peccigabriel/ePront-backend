const connection = require('../../database/connection');

module.exports = {

  async create(request, response) {
    const { id } = request.body;
    const idPat = await connection('patients').where('idPat', id).select('idPat');
    const medCount = Object.entries(idPat).length;

    if (medCount === 0) {
      return response.status(400).json({ error: 'Paciente não encontrado no sistema' });

    } else {
      return response.json(idPat);

    }
  }
}

