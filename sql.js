var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3000,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "hotresDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});
