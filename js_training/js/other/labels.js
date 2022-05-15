const cars = ["BMW","Volvo","Audi"];

list:{
    console.log(cars[0]);
    break list;
    console.log(cars[1]);
    console.log(cars[2]);
}
console.log("--------------------")

loop: for(let car of cars){
    for(let j of car){
        if(j === "l"){
            break loop; //break the outer loop instead of only inner loop
        }
        process.stdout.write(j+ " ");
    }
    console.log();
}