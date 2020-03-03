"use strict";

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "zj2x67aktl2o6q2n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "czt2coz2l116h6dx",
  password: "e87bad6141fzz0cq",
  database: "ripnpa1qezn73ekx"
});

connection.connect(err => {
  if (err) {
    console.error('error connecting', err.stack);
    return;
  }
  console.log(`connected with id ${connection.threadId}`);
});

module.exports = connection;