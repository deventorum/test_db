
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('milestones', function(table){
      table.foreign('famous_person_id')
      table.dropColumn('created_at');
      table.dropColumn('updated_at');
      table.dropColumn('id')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('milestones', function(table){
      table.uuid('id').notNullable().primary();
      table.dropColumn('famous_person_id')
      table.timestamps();
    })
  ])
};
