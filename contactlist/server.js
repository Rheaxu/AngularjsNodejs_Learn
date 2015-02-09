var express = require("express");
var app = express();

/*app.get("/",function(req,res){
	res.send("Hello World from server.js")
});*/

app.use(express.static(__dirname+"/public"));

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
})

app.listen(3000);
console.log("Server running on port 3000");