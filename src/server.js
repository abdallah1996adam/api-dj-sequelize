const express = require("express");
const helmet = require("helmet");
const logger = require("morgan");
const cors = require("cors");

const routes = require("./routes");

const { notFoundHandler, errorLogger, errorHandler } = require("./middlewares");

const server = express();

server.use(helmet());
server.use(logger("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/api", cors());

server.use("/api", routes);

server.use("*", notFoundHandler);
server.use(errorLogger);
server.use(errorHandler);

module.exports = server;
