const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req , res){
   res.sendFile(__dirname + "/bmiCalculator.html");
});


app.post("/", function(req, res){

   var h1 = Number(req.body.hh);
   var w1 = Number(req.body.ww);

   var bmi = w1 / h1;

   res.send("Your Body mass index is : " + bmi);

});

app.listen(3000, function(){
   console.log("Server started on point 3000"); 
});




