const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

app.use(cors());

// Import userController
const userController = require("./controllers/userController");

// Set up routes for userController
app.post("/register", jsonParser, userController.register);
app.post("/login", jsonParser, userController.login);
app.post("/authen", jsonParser, userController.authen);
app.get("/user_detail", jsonParser, userController.user_detail);

// Create connection to database
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "mydb",
});

connection.connect((err) => {
  if (err) {
    console.error("Failed to connect to database.");
    throw err;
  } else {
    console.log("Connected to database!");
  }
});

app.listen(3000, function () {
  console.log("CORS-enabled web server listening on port 3000");
});

module.exports = app;
