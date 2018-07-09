// //import the http module
// var http = require('http');
//
// // handle sending request and returing reponses
// function handleRequets(req, res) {
//   // return string
//   res.end("Hello World");
// }
//
// //create the server
// var server = http.createServer(handleRequets);
// // start server and listen on port x
//
// server.listen(8080, function(){
//
//   console.log('Listening on 8080');
//
// });

var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var port = 8080;



//use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);


//ROUTE our app
var router = require('./app/routes');
app.use('/', router);





//ser static files (css and images etc)
app.use(express.static(__dirname + '/public'));




//start server

app.listen(port, function(){
  console.log('app started on 8080');
});


// app.get('/', function(req, res){
//
//   res.send('Hello World!!');
// });
