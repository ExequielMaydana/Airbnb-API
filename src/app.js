const express = require("express");

const app = express();

require("dotenv").config();
const port = process.env.PORT;

app.use(express.json());

const userRouter = require('./users/users.router').router

app.use('/api/v1/users', userRouter)

app.listen(port, () => {
  console.log(`Server started ${port}`);
});
