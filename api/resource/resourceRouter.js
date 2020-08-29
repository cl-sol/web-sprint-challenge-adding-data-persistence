const express = require("express");
const Resource = require("./resourceModel");
const router = express.Router();

router.get("/", (req, res) => {
    Resource.findResources()
        .then(resources => {
            res.json(resources);
        })
        .catch(err => {
            res.status(500).json({
                message: "Failed to load resourcess"
            });
        });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;

    Router.findResourcesById(id)
        .then(resource => {
            if(resource) {
                res.status(resource)
            } else {
                res.status(404).json({
                    message: "Could not find resouce"
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "Failed to load resources"
            });
        });
});

router.post("/", (req, res) => {
    const newResource = req.body;

    Project.addProject(newResource)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(err => {
            res.status(500).json({
                message: "Failed to add resource"
            });
        });
});

module.exports = router;