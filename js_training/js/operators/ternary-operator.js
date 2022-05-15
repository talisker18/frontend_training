let virusConcentration = 0.9;
let testResult;

if(virusConcentration>0.7){
    testResult ="symptomatic";
}else{
    testResult ="asymptomatic";
}


//or use ternary operator

testResult = virusConcentration>0.7 ? "symptomatic" : "asymptomatic";
console.log(testResult);