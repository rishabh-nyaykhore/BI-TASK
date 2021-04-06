const Task = require("./../model/taskModel");

// Controller For All Tasks
exports.getAllTasks = async (req, res, next) => {
    try {
        const task = await Task.find();
        res.status(200).json({
            status: "success",
            result: task.length,
            data: {
                task,
            },
        });
    } catch (err) {
        res.status(500).json({
            msg: "Something Went Wrong",
            StatusCode: 500,
        });
    }
};
// Controller For Create Task
exports.createTask = async (req, res, next) => {
    try {
        const dateObj = new Date();
        const endTime = new Date(dateObj.getTime() + req.body.duration * 60 * 1000);
        req.body.endTime = endTime;
        const task = await Task.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                data: task,
            },
        });
    } catch (error) {
        res.status(500).json({
            msg: "Something Went Wrong",
            StatusCode: 500,
        });
    }
};

// Controller For Delete Task
exports.deleteTask = async (req, res, next) => {
    try {
        const currentTime = new Date().getTime();
        await Task.deleteMany({ endTime: { $lte: currentTime } });
    } catch (error) {
        res.status(500).json({
            msg: "Something Went Wrong",
            StatusCode: 500,
        });
    }
};
