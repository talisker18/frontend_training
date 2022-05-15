let i = 1;

while(i <=10){
    console.log(i);
    i++;
}
console.log(`-----------------`);

//using break
i = 1;
while(i <=10){
    if(i ===5){
        break;
    }
    console.log(i);
    i++;
}

//using continue
console.log(`-----------------`);
i = 1;
while(i <=10){

    if(i ===6){
        continue;
    }
    console.log(i);
    i++;
}