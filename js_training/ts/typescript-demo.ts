// @ts-check

/*** @param {[any]} arr*/
function compact(arr: number[]){ //add a type with help of TS
    if(arr.length > 3){ 
        return arr.slice(0,10);
    }

    return arr;
}

let array = [1,2,3,4,5,6,7,8,9];
let trimmedArray = compact(array);
console.log(trimmedArray);
console.log("hello");