const name = "MacKenzie H"; // global scope; can be access outside of function

function logger() {   
    console.log(name);
    console.log("Hi");
    console.log("Hi");
    console.log("Hi");
    console.log("Hi");
    console.log("Hi");
} /// content in {} is only accessed when function is run

logger();


function adder (num1, num2,) {
    console.log(num1 + num2);
}

adder(4+4);