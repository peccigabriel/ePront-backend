const connection = require('../../database/connection');
const crypto = require('crypto');

module.exports = {

  //Logica para criação dos incidents
  async create(request, response) {
    const { dataIncident, descIncident, diagIncident, namePatient } = request.body;
    const idMedical = request.headers.authorization;

    const id_medical = await connection('medicals')
      .where('idMed', idMedical)
      .select('idMed')
      .first()

    if (!idMedical || !id_medical || idMedical !== id_medical.idMed) {
      return response.status(401).json({ error: 'Médico não encontrado.' })
    } 

    const [id] = await connection('incidents').insert({
      namePatient,
      dataIncident,
      descIncident,
      diagIncident, 
      idMedical,
    });
    return response.json({ id });
  },

      //Lógica da rota para listar todos os incidents
      async index(request, response) {
        const incidents = await connection('incidents').select('*');
        return response.json(incidents);
    }
    
}

