var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

//selectAll()
router.get("/", function(req, res) {
    burger.all(function(data){
      var hbsObject = {
       burgers: data
       };
      console.log(hbsObject);
      res.render("index", hbsObject);
    })
  });
//updateOne
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update(req.params.id, function(result) {
        console.log(result);
        //res.redirect('/');
        res.json(result);
    });
  });
  

  //insertOne
  //router.post("/api/burgers", function(req, res) {
   // cat.create([
   //   "name", "sleepy"
  //  ], [
  //    req.body.name, req.body.sleepy
  //  ], function(result) {
      // Send back the ID of the new quote
    //  res.json({ id: result.insertId });
  //  });
 // });
  



module.exports = router;