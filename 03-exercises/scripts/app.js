function greetperson(name) {
    return "Hello, " + name + "!";
}
console.log(greetperson("Student"));



function calculateArea(height, width) {
    return height * width;
}
console.log(calculateArea(5, 10)); 

function log(message) {
    return console.log("Area: " + message + " square units");
}


const greetPerson = (name) => {
   console.log("Hello, " + name + "!");
};
greetPerson('Joshua');
greetPerson('Emma');

console.log(greetPerson("Student"));

const calculateArea = (height, width) => height * width;

const log = message => console.log("Area: " + message + " square units");

const area = calculateArea(5, 10);
log(area);  