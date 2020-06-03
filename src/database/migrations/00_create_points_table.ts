import Knex from 'knex';

export async function up(knex: Knex) {
   // criar a tabela
   return knex.schema.createTable('points', table => {
      table.increments('id').primary();
      table.string('image').notNullable();
      table.string('name', 255).notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.decimal('laitude').notNullable();
      table.decimal('longitude').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
   });
}

export async function down(knex: Knex) {
   // deletar a tabela ou rollback
   return knex.schema.dropTable('points');
}
