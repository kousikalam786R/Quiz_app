var express = require('express');
var router = express.Router();
const mysql = require("mysql");



const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "quiz_app",
});

// connection.end();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', function(req, res, next) {
  connection.connect();
  var name=req.body.name
  var email=req.body.email
  var password=req.body.password
  connection.query(`INSERT INTO users (name,email,password) VALUES ('${name}','${email}','${password}');`, (err, result) => {
    if (err) throw err;
  });
  console.log("user created")

  connection.end();
  
});

module.exports = router;
