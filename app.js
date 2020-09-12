const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const todoRoute = require("./routes/todoRoutes");
dotenv.config({ path: "./convig.env" });
// midlewar
app.use(express.json());
app.use("/api/v1/todo", todoRoute);
//
mongoose
  .connect(process.env.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("succes");
  });
app.listen(process.env.port, (err) => {
  console.log(`connected ${process.env.port}`);
});
