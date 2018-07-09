var express = require('express');
var path = require('path');

var router = express.Router();


//export router

module.exports = router;

//route for our homepage
router.get('/', function(req, res){

  res.render('pages/index');
});


//route for our about page
router.get('/about', function(req, res){

  //res.sendFile(path.join(__dirname, '../about.html'));
    res.render('pages/about');
});

//route for our about page
router.get('/contact', function(req, res){

//  res.sendFile(path.join(__dirname, '../contact.html'));
    res.render('pages/contact');

});
//route for our about page
router.get('/demo', function(req, res){

//  res.sendFile(path.join(__dirname, '../contact.html'));
    res.render('pages/demo');

});

router.get('/live', function(req, res){

//  res.sendFile(path.join(__dirname, '../contact.html'));
    res.render('pages/live');

});
