const connection = require('../../database/connection');
const crypto = require('crypto');

module.exports = {

    //logica da rota para cadastrar medicos
    async create (request, response) {
        const { nameMed, rgMed, crmMed, datanascMed, telMed, cityMed, ufMed, especialidade } = request.body;

        //gerando 4 bytes de caracteres hexa aleátorios.
        const idMed = crypto.randomBytes(4).toString('HEX');

        //insert, cadastro de medicos
        await connection('medicals').insert ({
            idMed,
            nameMed,
            rgMed,
            crmMed,
            datanascMed,
            telMed,
            cityMed,
            ufMed,
            especialidade,
        })
        return response.json({ idMed });
    },

    //logica da rota para listar ongs
    async index(request, response) {
        const medicals = await connection('medicals').select('*');
        return response.json(medicals);
    }

}