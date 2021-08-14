export function up(knex) {
  return knex.schema.createTable('patients', function (table) {
    table.string('idPat').primary();
    table.string('namePat').notNullable();
    table.string('rgPat').notNullable();
    table.date('datanascPat').notNullable();
    table.string('telPat').notNullable();
    table.string('cityPat').notNullable();
    table.string('ufPat', 2).notNullable();
    table.string('historyPat').notNullable();

    //Coluna que faz referência ao nome do medico da tabela medicals
    table.string('crm_medical').notNullable();

    //foreign key
    table.foreign('crm_medical').references('crmMed').inTable('medicals');
  });
}

export function down(knex) {
  return knex.schema.dropTable('patients');
}
