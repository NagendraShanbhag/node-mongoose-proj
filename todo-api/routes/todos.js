var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Todo = require('../models/Todo.js');
/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Todo.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});




router.get('/:page/:rec', function(req, res, next) {



  var page = parseInt(req.params.page);
  var rec = parseInt(req.params.rec);
  console.log(page +' ' + rec);

/*Todo.find({}, {}, { skip: page , limit: rec}, function(err, todos) { 

if (err) return next(err);
    res.json(todos);

});*/


  Todo.paginate({}, { page: page, limit: rec }, function(err, todos) {

    if (err) return next(err);
    res.json(todos);
    // result.docs 
    // result.total 
    // result.limit - 10 
    // result.page - 3 
    // result.pages 
});

})



/* POST /todos */
router.post('/', function(req, res, next) {
  Todo.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  Todo.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  Todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;

