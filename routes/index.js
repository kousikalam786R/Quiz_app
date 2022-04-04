var express = require("express");
const util = require("util");
var router = express.Router();

const mysql = require("mysql");
const { required } = require("nodemon/lib/config");
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
const query = util.promisify(connection.query).bind(connection);
 router.get("/question",async function (req, res, next) {
  var q_no = req.query.q_no;
  console.log(q_no)
   questiondata = await query(`SELECT * from quiz_questions order by id limit 1 offset ${q_no}`)
  // await util.promisify( connection.query(`SELECT * from quiz_questions order by id limit 1 offset ${q_no}`, (err, rows, fields) => {
  //   if (err) throw err;
  //   console.log(rows)
  //   rows.forEach((element) => {
  //     element.options = JSON.parse(element.options);
  //   });
  //   questiondata = rows;
  // }));
  questiondata.forEach(element => {
    element.options = JSON.parse(element.options);
    
  });

  console.log(questiondata)

  res.json({ data: questiondata });
  
});

module.exports = router;
