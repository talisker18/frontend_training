const cars = ["BMW","Volvo","Audi"];

for(let x in cars){
    console.log(x); //print indices
    //or print on same line: process.stdout.write(x)
}

//for of loop
for(let x of cars){
    console.log(x); //print values
}

let language = "Javascript";
for(let x of language){
    console.log(x); //print each char
}