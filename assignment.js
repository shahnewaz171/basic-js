//https://github.com/shahnewaz601/basic-js

//Kilometer-To-Meter
function kilometerToMeter(kilometers){
    var meters;
    if(kilometers >= 0){
        meters =  kilometers * 1000;
    }
    else{
        return "Can't be negative!!";
    }
    return meters;
}
var totalMeter =  kilometerToMeter(6);
console.log(totalMeter);


//Budget-Calculator
// function budgetCalculator(clock, phone, laptop){
    
//     var clockPrice = clock * 50;
//     var phonePrice = phone * 100;
//     var laptopPrice = laptop * 500;

//     var total = clockPrice + phonePrice + laptopPrice;
//     return total;
// }

// var totalAmount =  budgetCalculator(10, 15, 20);
// console.log(totalAmount);




//Hotel-Cost
function hotelCost(days){
    var total;
    if(days >= 0){
        if(days <= 10){
            total = days * 100;
        } 
        else if(days > 10 && days <= 20){
            total = days * 80 + 200;
        }
        else{
            total = days * 50 + 800;
        }
    }
    else{
        return "Can't be negative!!";
    }
    return total;
}
var result = hotelCost(21);
console.log(result);