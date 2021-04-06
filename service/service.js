const CronJob = require('node-cron');
const taskController = require('./../taskController/taskController');

// Cron Job that will run every minute
const job = CronJob.schedule('* * * * *', function () {
    taskController.deleteTask();
    console.log('You will see this message every min');
});
job.start();

module.exports = job;