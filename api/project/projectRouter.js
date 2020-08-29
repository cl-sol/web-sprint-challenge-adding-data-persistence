const express = require("express");
const Project = require("./projectModel");
const router = express.Router();

router.get("/", (req, res) => {
    Project.findProject()
        .then(project => {
            res.json(project);
        })
        .catch(err => {
            res.status(500).json({
                message: "Failed to load projects"
            });
        });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;

    Project.findProjectById(id)
        .then(project => {
            if(project) {
                res.status(project)
            } else {
                res.status(404).json({
                    message: "Could not find project"
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "Failed to load projects"
            });
        });
});

router.post("/", (req, res) => {
    const newProject = req.body;

    Project.addProject(newProject)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(err => {
            res.status(500).json({
                message: "Failed to add project"
            });
        });
});