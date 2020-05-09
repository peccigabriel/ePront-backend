
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function (table) {
    table.increments();
    table.string('dataIncident').notNullable();
    table.string('descIncident').notNullable();
    table.date('diagIncident').notNullable();

    //Coluna que faz referencia ao nome do pacient
    table.string('namePatient').notNullable();

    //Coluna que faz referência ao nome do medico da tabela medicals
    table.string('idMedical').notNullable();

    //foreign keys
    table.foreign('idMedical').references('idMed').inTable('medicals');
    table.foreign('namePatient').references('namePat').inTable('patients');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
