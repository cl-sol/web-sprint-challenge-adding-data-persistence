const db = require("../../data/config");

module.exports = {
    findProjectResources,
}

function findProjectResources() {
    return db("project_resources");
};