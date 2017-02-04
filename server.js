// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mysql = require("mysql");
 

var app = express();
var PORT = 6000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



//============================SQL connection==============================================//
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "saadkhurshid310588",
  database: "hotresDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  // start();
});




var tableArray = 
{
  name : "Saad",
  phone: '22222-2222',
  email: 'me@ma',
  id: '223'

};


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

// app.get("/add", function(req, res) {
//   res.sendFile(path.join(__dirname, "tables.html"));
// });

// app.get("/all", function(req, res) {
//   res.sendFile(path.join(__dirname, "reserve.html"));
// });
// app.get("/api/res", function(req, res) {
  
//   console.log('hello');
//   connection.query("SELECT * FROM reservation", function(err, res){
//     if (err) throw err;
    
    
//     res.json(tableArray);

    
//   })
//   // res.json({myparam:"test"});
// });

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId);
// });

// connection.query("SELECT * FROM reservation", function(err, res) {
//   if (err) throw err;
//   console.log(res);
//   start();
// });

// var start =function()
// {

// connection.query("SELECT * FROM reservation", function(err, res) {
//   if (err){ throw err;
//   console.log(res);
//   }
//   else 
//   {
//     for (var i = 0; i < res.length; i++) {
//       console.log(res[i].name + " | " + res[i].phone + " | " + res[i].email + " | " + res[i].id);
  
//       console.log("-----------------------------------");
//     };

// };


// }
// }
// var start = function(){
//   connection.query("SELECT * FROM reservation", function(err,res){
//     if (err) throw err;
//     else{
//       for (var i=0; i <res.length; i++){
//         console.log(res[i].name + " | " + res[i].phone + " | "+ res[i].email + " | "+ res[i].id );
//         console.log('this is line 125');
//       }
//     }
//   })
// }




// start();

// app.get("/api/res", function(req, res) {
//   var name = req.param('name');
//   var phone = req.param('phone');
//   var email = req.param('email');
//   var id = req.param('id');

//   res[0].send(name+" "+phone+" "+email+''+id);
// });

// Search for Specific Character (or all characters) - provides JSON
// app.get("/api/:characters?", function(req, res) {
//   var chosen = req.params.characters;

//   if (chosen) {
//     console.log(chosen);

//     for (var i = 0; i < characters.length; i++) {
//       if (chosen === characters[i].routeName) {
//         res.json(characters[i]);
//         return;
//       }
//     }

//     res.json(false);
//   }
//   else {
//     res.json(characters);
//   }
// });


connection.query("SELECT * FROM reservation", function(err, res) {
  if (err) throw err;
  console.log(res)
  console.log('line172');
});

connection.query("SELECT * FROM waiting", function(err, res) {
  if (err) throw err;
  console.log('this is line 168');
  console.log(res);
});
connection.query("INSERT INTO waiting SET ?", {
  name: "tish",
  phone: 222-22222,
  email: 'eamilme@email.com',
  id: 'ann'
}, function(err, res) {});



app.post('/api/new', function(req, res){
  if (tableArray.length < 5){
    tableArray.push(req.body);
    res.json(true);
  }
  else{
    console.log('it works');
  }
  // var newName = req.body;
  // console.log(newName);

  // tableArray.push(newName);
  // res.json(newName);
});

// Create New Characters - takes in JSON input
// app.post("/api/new", function(req, res) {
//   var newcharacter = req.body;
//   newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newcharacter);

//   characters.push(newcharacter);

//   res.json(newcharacter);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
