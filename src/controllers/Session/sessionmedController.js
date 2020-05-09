const connection = require('../../database/connection');

module.exports = {

  async create(request, response) {
    const { id } = request.body;
    const idMed = await connection('medicals').where('idMed', id).select('idMed');
    const medCount = Object.entries(idMed).length;

    if (medCount === 0) {
      return response.status(400).json({ error: 'Médico não encontrado no sistema' });

    } else {
      return response.json(idMed);

    }

  }

}

