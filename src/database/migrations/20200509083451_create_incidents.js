export function up(knex) {
  return knex.schema.createTable('incidents', function (table) {
    table.increments();
    table.string('descIncident').notNullable();
    table.date('dataIncident').notNullable();
    table.string('diagIncident').notNullable();

    //Coluna que faz referencia ao nome do pacient
    table.string('namePatient').notNullable();

    //Coluna que faz referência ao nome do medico da tabela medicals
    table.string('idMedical').notNullable();

    //foreign keys
    table.foreign('idMedical').references('idMed').inTable('medicals');
    table.foreign('namePatient').references('namePat').inTable('patients');
  });
}

export function down(knex) {
  return knex.schema.dropTable('incidents');
}
