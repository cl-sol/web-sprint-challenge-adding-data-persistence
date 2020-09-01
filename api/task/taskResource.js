const express = require("express");
const Task = require("./taskModel");
const router = express.Router();

router.get("/", (req, res) => {
    Task.findTask()
        .then(task => {
            res.json(task);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "Failed to load tasks"
            });
        });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;

    Router.findTasksById(id)
        .then(task => {
            if(task) {
                res.status(task)
            } else {
                res.status(404).json({
                    message: "Could not find task"
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "Failed to load task"
            });
        });
});

router.post("/", (req, res) => {
    const newTask = req.body;

    Project.addProject(newTask)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(err => {
            res.status(500).json({
                message: "Failed to add task"
            });
        });
});

module.exports = router;