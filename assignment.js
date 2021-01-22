//https://github.com/shahnewaz601/basic-js

//Kilometer-To-Meter
function kilometerToMeter(kilometers){
    var meters;
    if(kilometers >= 0){
        meters =  kilometers * 1000;
    }
    else{
        return "Unexpected error";
    }
    return meters;
}
var totalMeter =  kilometerToMeter(14);
console.log(totalMeter);


//Budget-Calculator
function budgetCalculator(clock, phone, laptop){
    var total;
    if(clock >= 0 && phone >= 0 && laptop >= 0){
        var clockPrice = clock * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;

        total = clockPrice + phonePrice + laptopPrice;
    }
    else{
        return "Unexpected error";
    }
    return total;
}
var totalAmount =  budgetCalculator(2, 4, 7);
console.log(totalAmount);


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
    else if(days < 0){
        return "Can't be negative!!";
    }
    return total;
}
var totalCost = hotelCost(22);
console.log(totalCost);


//Mega-Friend
var allNames = ['Moon', 'Hasan Mahmud', 'Shahriar', 'Aladin', 'Mahmud Hasan'];

function megaFriend(names){
    var strLongest = names[0].length;
    var longest = names[0];
    for (var i = 0; i < names.length; i++){
        var element = names[i].length;
        if(element > strLongest){
            longest = names[i];
            strLongest = element;
        }
    }
    return longest;
}
var longestName = megaFriend(allNames);
console.log(longestName);
