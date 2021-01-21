//https://github.com/shahnewaz601/basic-js

//Kilometer-To-Meter
function kilometerToMeter(kilometers){
    var meters = kilometers * 1000;

    return meters;
}
var totalMeter =  kilometerToMeter(50);
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