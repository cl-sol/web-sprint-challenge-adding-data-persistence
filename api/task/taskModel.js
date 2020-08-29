const db = require("../../data/config");

module.exports = {
    findTask,
    findTaskById,
    addTask
}

function findTask() {
    return db("task");
};

function findTaskById(id) {
    return db("task")
        .where({ id })
        .limit(1);
};

function addTask(task) {
    return db("task")
        .insert(task)
        .then (id => {
            return findTasksById(id);
        });
};