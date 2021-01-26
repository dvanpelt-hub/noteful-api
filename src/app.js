require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV } = require("./config");
const folderRouter = require("./folder/folder-router");
const noteRouter = require("./note/note-router");
const errorHandler = require("./errorHandler");

const app = express();

app.use(
  morgan(NODE_ENV === "production" ? "tiny" : "common", {
    skip: () => NODE_ENV === "test",
  })
);

app.use(helmet());
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content Type, Accept"
  );
  next();
});

app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/api/folder", folderRouter);
app.use("/api/note", noteRouter);

module.exports = app;