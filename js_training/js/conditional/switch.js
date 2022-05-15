let day;

switch (new Date().getDay()){
    case 0:
        day= "sunday";
        break;
    case 1:
        day="monday";
        break;
    case 2:
        day = "tuesday";
        break;
    default:
        day = "some other day";
        break;

    //...
}

console.log(day);