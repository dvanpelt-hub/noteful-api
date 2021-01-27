require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const folderRouter = require("./folder/folder-router");
const noteRouter = require("./note/note-router");
const { NODE_ENV } = require("./config");
const errorHandler = require("./errorHandler");

const app = express();

app.use(
  morgan(NODE_ENV === "production" ? "tiny" : "common", {
    skip: () => NODE_ENV === "test",
  })
);

app.use(cors());
app.use(helmet());

app.use(errorHandler);
app.use("/api/folders", folderRouter);
app.use("/api/notes", noteRouter);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content Type, Accept"
  );
  next();
});

module.exports = app;
