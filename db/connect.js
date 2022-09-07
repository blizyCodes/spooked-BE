const mongoose = require("mongoose");

const ENV = process.env.NODE_ENV || "development";
const pathToCorrectEnvFile = `${__dirname}/../.env.${ENV}`;

console.log(process.env.NODE_ENV);

require("dotenv").config({
  path: pathToCorrectEnvFile,
});

const db = mongoose.connect(process.env.MONG_URI, {
  dbName: process.env.DB,
});

console.log(process.env.DB);

module.exports = db;
