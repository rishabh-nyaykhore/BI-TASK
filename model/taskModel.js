const mongoose = require('mongoose');

// Creating new Mongoose Schema For Task Model
const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    creator: {
        type: String,
    },
    duration: {
        type: Number,
        required: true
    },
    endTime: {
        type: Date,
        default: Date.now()
    }
}, { timestamps: true })

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;