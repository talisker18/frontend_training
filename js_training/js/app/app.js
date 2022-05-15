let userchoice=prompt("chose an option[1-5]");
let num1;
let num2;

function add(num1,num2){
return num1+num2;
}

function sub(num1,num2){
return num1-num2;
}
function mul(num1,num2){
return num1*num2;
}

function div(num1,num2){
return num1/num2;
}

switch(userchoice)
{
case 1: let sum=add(10,5);
console.log(`${sum}`);
break;
case 2: let sub1=sub(10,5);
console.log(`${sub1}`);
break;
case 3: let mul1=mul(3,2);
console.log(`${mul1}`);
break;
case 4: let div1=div(6,2);
console.log(`${div1}`);
break;
case 5:
break;
default: console.log("please select right choice value 1-5 only")

}