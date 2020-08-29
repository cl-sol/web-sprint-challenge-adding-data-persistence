
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {resource_name: "bucket"},
        {resource_name: "sponge"},
        {resource_name: "hose"},
        {resource_name: "dry cloths"},
        {resource_name: "window cleaner"},
        {resource_name: "vacuum"},
        {resource_name: "records"}
      ]);
    });
};
