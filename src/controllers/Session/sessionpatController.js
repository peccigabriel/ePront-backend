const connection = require('../../database/connection');

module.exports = {

  async create(request, response) {
    const { id } = request.body;
    const idPat = await connection('patients').where('idPat', id).select('namePat').first();
    // const medCount = Object.entries(idPat).length;

    if (!idPat) {
      return response.status(400).json({ error: 'Paciente não encontrado no sistema' });

    } else {
      return response.json(idPat);
      
    }
  }
}

