const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//bring in db uri through env vars
require('dotenv').config();

//configure express server to listen on port 5000
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//connect to mongodb via mongoose
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {newUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

//load orm schemas
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

//start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
