const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/users');
const user1Router = require('./routes/user1');
const todosRouter = require('./routes/todos');
const authRouter = require('./routes/auth');

app.use('/users', usersRouter);
app.use('/user1', user1Router);
app.use('/todos', todosRouter);
app.use('/auth', authRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
