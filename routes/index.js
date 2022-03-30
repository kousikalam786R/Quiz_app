var express = require("express");
var router = express.Router();

const mysql = require("mysql");
var questiondata;
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "quiz_app",
});







/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.post("/login", function (req, res, next) {
  // connection.connect();
  const email = req.body.email;
  const password = req.body.password;
  var data;
  connection.query("SELECT * from users WHERE email='email' AND password='password'", (err, result) => {
    if (err) {console.log(err);
    return res.json({error: "some error"})
    }
    console.log(result)
  
    

data = result;
    
  });
  // connection.end();
  res.json({data: "jjmhh"});

  
});
 router.get("/question",async function (req, res, next) {
  var q_no = req.query.q_no;
  await connection.query(`SELECT * from quiz_questions order by id limit 1 offset ${q_no}`, (err, rows, fields) => {
    if (err) throw err;
  
    rows.forEach((element) => {
      element.options = JSON.parse(element.options);
    });
    questiondata = rows;
  });
  res.json({ data: questiondata });
});

module.exports = router;
