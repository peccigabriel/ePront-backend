const connection = require('../../database/connection');
const crypto = require('crypto');

module.exports = {

    //Lógica da rota para cadastrar pacientes c/ vinculo ao nome do médico da tabela medicals
    async create(request, response) {
        const { namePat, rgPat, datanascPat, telPat, cityPat, ufPat, historyPat } = request.body;
        const crm_medical = request.headers.authorization;
        const idPat = crypto.randomBytes(4).toString('HEX');

        const crmMedical = await connection('medicals')
            .where('crmMed', crm_medical)
            .select('crmMed')
            .first()

        if (!crm_medical || !crmMedical || crm_medical !== crmMedical.crmMed) { 
            return response.status(401).json({ error: 'Médico não encontrado.' })
        }

        await connection('patients').insert ({
                idPat,
                namePat, 
                rgPat, 
                datanascPat, 
                telPat, 
                cityPat, 
                ufPat,
                historyPat,
                crm_medical,
            })

            return response.json({ idPat });
            
        },

    //Lógica da rota para listar todos os pacientes
    async index(request, response) {
        const patients = await connection('patients').select('*');
        return response.json(patients);
    }    

}


