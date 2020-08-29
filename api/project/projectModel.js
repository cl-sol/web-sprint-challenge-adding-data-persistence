const db = require("../../data/config");

module.exports = {
    findProject,
    findProjectById,
    addProject
}

function findProject() {
    return db("project");
};

function findProjectById(id) {
    return db("project")
        .where({ id })
        .limit(1);
};

function addProject(project) {
    return db("project")
        .insert(project)
        .then(id => {
            return findProjectById(id);
        });
};