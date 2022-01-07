const express = require("express");
const mongoose = require("mongoose");

//connection to database
const DB = process.env.DATABASE;
const connectionParams = {
  useNewUrlParser: true,
};

mongoose
  .connect(DB, connectionParams)
  .then((con) => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });
const res = require("express/lib/response");
const app = express();

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const userRouter = require("./routes/userRoutes");
app.listen(3000, () => {
  console.log("server is running at port 3000");
});

app.use(express.json({ limit: "10kb" }));

// app.get("/", (req, res) => {
//   res.send("Hello world I am awesome");
// });

app.use("/", userRouter);
