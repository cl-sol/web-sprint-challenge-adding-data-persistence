const express = require("express");
const server = express();

const projectRouter = require("");
const resourceRouter = requite("");
const taskRouter = require("");
const projectResourcesRouter = require("");

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