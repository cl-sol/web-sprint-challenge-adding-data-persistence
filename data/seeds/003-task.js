
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {description: "clean car", project_id: 1, resource_id: 1},
        {description: "organize albums alphabetically", project_id: 2, resource_id: 2}
      ]);
    });
};
