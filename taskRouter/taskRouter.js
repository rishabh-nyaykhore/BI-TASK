const express = require('express');
const taskController = require('./../taskController/taskController');

// creating a new router object
const router = express.Router();

// Router to Get All Tasks
router.route('/list').get(taskController.getAllTasks);

// Router to Create Task
router.route('/add').post(taskController.createTask);

module.exports = router;