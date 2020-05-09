const knex = require('knex');

//Importando as configurações do arquivo knexfile.js
const configuration = require('../../knexfile');

//Atribuindo as configurações para conexão de desenvolvedor, setadas no arquivo knexfile.js
const connection = knex(configuration.development);

module.exports = connection;