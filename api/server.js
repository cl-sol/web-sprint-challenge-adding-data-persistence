const express = require("express");
const server = express();

const projectRouter = require("./project/projectRouter");
const resourceRouter = require("./resource/resourceRouter");
const taskRouter = require("./task/taskResource");
const projectResourcesRouter = require("./projectResources/projectResourcesRouter");

server.use(express.json());
server.use("/api/project", projectRouter);
server.use("/api/resource"), resourceRouter;
server.use("/api/task", taskRouter);
server.use("/api/project-resources", projectResourcesRouter);

server.get("/", (req, res) => {
    res.status(200).json({
        message: "api running"
    })
})

module.exports = server;