var express = require("express");
var app = express();
var mongojs = require("mongojs");
var db = mongojs("contactlist",["contactlist"]);	//which mongodb database and colleciton will be used
var bodyParser = require("body-parser");

/*app.get("/",function(req,res){
	res.send("Hello World from server.js")
});*/

app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());

/*This method get data from database*/
app.get("/contactlist",function(req,res){
	console.log("I received a get request");

	db.contactlist.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});
})

app.post("/contactlist",function(req,res){
	console.log(req.body);	//get data from the body of request. But the server doesn't know how to parse it yet.
	db.contactlist.insert(req.body,function(err,doc){	// the function is the callback to be run after the records are updated.
		res.json(doc);	//send json data back to controller
	});
})

app.delete("/contactlist/:id",function(req,res){
	var id = req.params.id;
	console.log(id);
	db.contactlist.remove({_id:mongojs.ObjectId(id)},function(err,doc){
		res.json(doc);	//doc is the item we are removing
	});
});

app.get("/contactlist/:id",function(req,res){
	var id = req.params.id;
	console.log(id);
	db.contactlist.findOne({_id:mongojs.ObjectId(id)},function(err,doc){
		res.json(doc);
	});
});

app.put("/contactlist/:id",function(req,res){
	var id = req.params.id;
	console.log(req.body.name);
	db.contactlist.findAndModify({query:{_id:mongojs.ObjectId(id)},
		update:{$set:{name:req.body.name,email:req.body.email,number:req.body.number}},
		new: true},function(err,doc){
			res.json(doc);
		});
})

/* This method doesn't get data from database
app.get("/contactlist",function(req,res){
	console.log("I received a get request")	//This msg will be print on the server

	person1 = {
		name:"Tim",
		email:"tim@email.com",
		number:"(999)-999-9999"
	}

	person2 = {
		name:"Bob",
		email:"bob@email.com",
		number:"(888)-888-8888"
	}

	person3 = {
		name:"Alice",
		email:"alice@email.com",
		number:"(777)-7-7777"
	}

	var contactlist = [person1,person2,person3];
	res.json(contactlist);
})*/

app.listen(3000);
console.log("Server running on port 3000");