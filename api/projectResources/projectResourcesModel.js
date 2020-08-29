const db = require("../../data/config");

module.exports = {
    findProjectResources,
    findResourcesById,
    addResource
}

function findResources() {
    return db("project_resources");
};