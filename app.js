const name = "mackenzie"; // global scope; can be access outside of function

//function 1
function logger() {     //content inside () are paramters 
    console.log(name);
    console.log("Hi");
    console.log("Hi");
    console.log("Hi");
    console.log("Hi");
    console.log("Hi");
} /// content in {} is only accessed when function is run

logger();

//function 2
function adder (num1, num2) {
    console.log(num1 + num2);
}

adder(4,4);

//function 3
function toUpper(text) {
    const upperCased = text.toUpperCase();
    console.log(upperCased);
}

toUpper(name);

//object
const cat = {
// object properties 
    name: "Louis",
    type: "cat",
    age: "9",
    color: "Tuxedo",
    ownerLastName: "Harris",
//Object Method
    FullName: function (){
        return this.name + " " + this.ownerLastName;
    }
};

console.log(cat);