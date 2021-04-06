const express = require("express");
const taskRouter = require("./../taskRouter/taskRouter");
const task = express();
task.use(express.json());

// Middleware to routes URL
task.use("/api/v1/tasks", taskRouter);

// For any Wrong URL 
task.all("*", (req, res, next) => {
    res.status(404).json({
        status: 404,
        msg: "URL_NOT_FOUND",
    });
});
module.exports = task;
