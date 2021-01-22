//https://github.com/shahnewaz601/basic-js

//Kilometer-To-Meter
function kilometerToMeter(kilometers){
    var meters;
    if(kilometers >= 0){
        meters =  kilometers * 1000;
    }
    else if(kilometers < 0){
        return "Can't be negative!!";
    }
    return meters;
}
var totalMeter =  kilometerToMeter(-1);
console.log(totalMeter);


//Budget-Calculator
function budgetCalculator(clock, phone, laptop){
    
    var clockPrice = clock * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;

    var total = clockPrice + phonePrice + laptopPrice;
    return total;
}

var totalAmount =  budgetCalculator(10, 15, 20);
console.log(totalAmount);


//Hotel-Cost
// function hotelCost(days){
//     if(days >= 10){
//         console.log('100');
//     } 
//     else if(days <= 20){
//         console.log('80');
//     }
//     else{
//         console.log('50');
//     }
// }
// var check = hotelCost(1700);
// console.log(check);