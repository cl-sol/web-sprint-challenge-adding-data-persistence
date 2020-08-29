
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {project_name: "wash car", description: "wash and vacuum car"},
        {project_name: "organize albums", description: "sort albums by artist name"}
      ]);
    });
};
