var name1 = "Akshat";
var color = "Black";
var age = 21;

// Function declaration
var msg = function(){
    console.log(this.name1 + " Welcome");
}

// Using object Literal Enhancement
var Person = {name1,color,age,msg};
Person.msg();
// console.log(Person.name1)