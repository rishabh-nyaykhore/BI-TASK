const task = require("./../task/task");
const mongoose = require("mongoose");
const dotevn = require("dotenv");
dotevn.config();
const DB = process.env.DATABASE.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
);

// Connect to mongoDB Data Base
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("connection Done to database..");
    });

// start Cron Job By calling Once
require("./../service/service");

// start server
const port = process.env.PORT || 4000;
const server = task.listen(port, function () {
    console.log(`server is running on port:${port}`);
});
