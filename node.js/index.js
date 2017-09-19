var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");


var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
var Book = mongoose.model("Books",{
	bookName: "string",
	description: "string",
	img:"string"
});

mongoose.connect("mongodb://127.0.0.1:27017",function(err){
	if(err){
		console.log(err);
		return;
	}
	console.log("we're connected to MongoDB");
});
app.post("/books",function(req,res){
	var book = new Book(req.body);
	book.save();
	res.status(201);
	res.send();
});
app.get("/books",function(req,res){
	Book.find({},function(err,books){
		res.send(books);
	});
});
app.get("/books/:bookName",function(req,res){
	Book.find({bookName:req.params.bookName},function(err,books){
		res.send(books);
	});
});
app.delete("/books/:_id",function(req,res){
	Book.remove({_id:req.params._id},function(err,books){
		res.status(204);
		res.send();
	});
});
app.listen(3000,function(){
	console.log("listen to Port 3000");
});