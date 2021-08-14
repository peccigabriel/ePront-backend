export function up(knex) {
  return knex.schema.createTable('medicals', function (table) {
    table.string('idMed').primary();
    table.string('nameMed').notNullable();
    table.date('datanascMed').notNullable();
    table.string('rgMed').notNullable();
    table.string('crmMed').notNullable();
    table.string('telMed').notNullable();
    table.string('cityMed').notNullable();
    table.string('ufMed', 2).notNullable();
    table.string('especialidade').notNullable();
  });
}

export function down(knex) {
  return knex.schema.dropTable('medicals');
}
