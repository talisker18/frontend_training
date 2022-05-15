"use strict"; //allows only modern js syntax, like "let"

let username = "joel";

if(username){
    console.log("inside if block"); //username is not null or undefined, so condition is true
}else{
    console.log("inside else block");
}

if(username.startsWith("j")){
    console.log("inside if block");
}else if(username.startsWith("a")){
    console.log("inside else block");
}else{

}