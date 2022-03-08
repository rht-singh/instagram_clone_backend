const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet(), compression());

module.exports = app;
