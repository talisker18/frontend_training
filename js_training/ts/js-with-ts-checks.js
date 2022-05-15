// @ts-check

function compact(arr){
    if(drr.length > 3){ //we have done a typo, JS will not see this before runtime
        return arr.trim(0,10);
    }

    return arr;
}

let myArr = [1,2,3,4,5,6,7,8,9];
let trimmedArr = compact(myArr);