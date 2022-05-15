interface Account{
    id: number;
    displayName: string;
    version: number;
    phoneNumer?: string; //define optional with '?'
    readonly nationality?:string;

    //function inside interface
    
}


function welcome(user: Account){
    console.log(`welcome trainer no. ${this.id}`);
    if(user.phoneNumer){
        console.log("phone number: "+user.phoneNumer);
    }
}

let accountObj = {id: 101, displayName: "joel", version: 1, phoneNumer:"123", nationality:"CH"}; //like anonymous class
welcome(accountObj);


accountObj.id = 103; //we can change id

//but we cant change nationality because its read only
accountObj.nationality = "CH";