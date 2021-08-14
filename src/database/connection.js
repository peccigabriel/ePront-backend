import knex from 'knex';

//Importando as configurações do arquivo knexfile.js
import { development } from '../../knexfile';

//Atribuindo as configurações para conexão de desenvolvedor, setadas no arquivo knexfile.js
const connection = knex(development);

export default connection;
