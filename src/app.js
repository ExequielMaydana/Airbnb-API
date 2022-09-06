const express = require("express");
const { db } = require("./utils/database");
const {initModels} = require('./utils/initModels')


const app = express();

initModels()

db.authenticate()
  .then(() => console.log("Database Authenticate"))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.log(err))


require("dotenv").config();
const port = process.env.PORT;

app.use(express.json());

const userRouter = require("./users/users.router").router;

app.use("/api/v1/users", userRouter);

app.listen(port, () => {
  console.log(`Server started ${port}`);
});
