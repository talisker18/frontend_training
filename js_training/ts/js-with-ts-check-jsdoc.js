// @ts-check

/*** @param {[any]} arr*/
function compact(arr){
    if(arr.length > 3){ 
        return arr.trim(0,10);
    }

    return arr;
}

let array = [1,2,3,4,5,6,7,8,9];
let trimmedArray = compact(myArr);