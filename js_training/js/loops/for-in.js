//for in loop over an object
const person = {
    firstname: "joel",
    lastname:"henz",
    age: 34
};

for(let key in person){
    console.log(`${key} : ${person[key]}`); //print key : value
}

//for in loop over an array
const numbers = [45,4,9,16,25];

for(let index in numbers){
    console.log(`${numbers[index]}`); //print key : value
}