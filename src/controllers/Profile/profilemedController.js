const connection = require('../../database/connection');

module.exports = {
  async index(request, response) {
    const crmMedical = request.headers.authorization;

    const incidents = await connection('patients').where('crm_medical', crmMedical).select('*');
    // const contador = Object.entries(incidents).length;

    if (!incidents) {
      return response.status(401).json({ error: "Médico não encontrado"});
    }
    return response.json(incidents);
  }
}