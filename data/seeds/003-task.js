
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {task_description: "clean car", project_id: 1},
        {task_description: "organize albums alphabetically", project_id: 2}
      ]);
    });
};
