
var assert = require("chai").assert,
expect =require("chai").expect,
should =require("chai").should()
var supertest = require("supertest")           //these are normal variable seprated by comma(,)
var server =supertest.agent("http://localhost:2017")

describe("Testing ContactList API",function(){

	it("should get all Contats",function(done){
		server.get("/getContact")
		       .expect(200)
		       .expect('content-type',/json/)
		       .end(function(err,res){

		       	console.log("response is ",res.body);
		       	res.body.forEach(function(data){

		       		console.log(data)
		       		data.should.have.property("name")
		       		
		       		
		       	})
		       	done();
		       })

		/* var foo = "Raj"; 
		 var tea ={flavors : "sweet"};
		 //assert.typeOf(foo,'string');
		 //expect(foo).to.be.a('string');
		 foo.should.be.a('string');
		 foo.should.equal("Raj");
		 foo.should.have.lengthOf(3);
		 tea.should.have.property('flavors')
*/

	})

	/*before("Before hook",function(){

		console.log("This is before hook")
	})
	after("This is after hook",function(){

		console.log("This is after hook")
	})
	beforeEach("This is before Each",function(){


		console.log("This is before Each hook")
	})
	afterEach("This is after Each",function(){


		console.log("This is after Each hook")
	})

	it("My first test case",function(){

       console.log("This is My first test case")
	})

	it("My second test case",function(){

      console.log("This is My second test case")
	})

	it("My third test case",function(){
      console.log("This is My third test case")

	})
})


describe.onl("This is my test suite",function(){


	
	it("My first test case",function(){

       console.log("This is My first test case")
	})

	it("My second test case",function(){

      console.log("This is My second test case")
	})

	it("My third test case",function(){
      console.log("This is My third test case")

	})*/
});