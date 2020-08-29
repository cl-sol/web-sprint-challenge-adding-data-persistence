const express = require("express");
const PResources = require("./projectResourcesModel");
const router = express.Router();

router.get("/", (req, res) => {
    PResources.findProjectResources()
        .then(presource => {
            res.json(presources);
        })
        .catch(err => {
            res.status(500).json({
                message: "Failed to load project resources"
            });
        });
});

module.exports = router;