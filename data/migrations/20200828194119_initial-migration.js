
exports.up = function(knex) {
  await knex.schema
    .createTable("project", (table) => {
        table.increments();
        table.string("project_name", 128)
            .unique()
            .notNullable();
        table.text("project_description");
        table.boolean("complete")
            .notNullable()
            .defaultTo(false);
    })
    .createTable("resource", (table) => {
        table.incremenets();
        table.string("resource-name", 128)
            .unique()
            .notNullable();
        table.text("resource_description");
  })
    .createTable("task", (table) => {
        table.incremenets();
        table.text("task_description")
            .notNullable();
        table.text("notes");
        table.boolean("complete")
            .notNullable()
            .defaultTo(false);
        table.integer("project_id")
            .unsigned()
            .notNullable()
            .references("project.id")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    })
    .createTable("project_resources", (table) => {
        table.integer("project_id")
            .unsigned()
            .notNullable()
            .references("project.id")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        table.integer("resource_id")
            .unsigned()
            .notNullable()
            .references("reference.id")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema  
    .dropTableIfExists("project_resources")
    .dropTableIfExists("task")
    .dropTableIfExists("resource")
    .dropTableIfExists("project")
};
