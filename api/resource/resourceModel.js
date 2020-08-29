const db = require("../../data/config");

module.exports = {
    findResources,
    findResourcesById,
    addResource
}

function findResources() {
    return db("resource");
};

function findResourcesById(id) {
    return db("resource")
        .where({ id })
        .limit(1);
};

function addResource(resource) {
    return db("resource")
        .insert(resource)
        .then (id => {
            return findResourcesById(id);
        });
};