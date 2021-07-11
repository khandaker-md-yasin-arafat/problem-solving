// kilometerToMeter 

// budgetCalculator

// hotelCost

// megaFriend


// Assignment 1
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}
var distance = kilometerToMeter(5);
console.log(distance);

// Assignment 2
function budgetCalculator(watch, mobile, laptop){
    var watch = watch * 50;
    var mobile = mobile * 100;
    var laptop = laptop * 500;
    var total = watch + mobile + laptop;
    return total; 
}
var totalCost = budgetCalculator(7, 3, 2);
console.log(totalCost);

//Assignment 3 
function hotelCost(day){
    var cost = 0;
    if(day <= 10){
        cost = day * 100;
    }
    else if(day <= 20){
        var firstTime = 10 * 100;
        var dueDay = day - 10;
        var secondTime = dueDay * 80;
        cost = firstTime + secondTime;
    }
    else{
        var firstTime = 10 * 100;
        var secondTime = 10 * 80; 
        var dueDay = day - 20;
        var thirdTime = dueDay * 50;
        cost = firstTime + secondTime +thirdTime;
    }
    return cost;
}
var totalHotelCost = hotelCost(26);
console.log(totalHotelCost);

//Assignment 4
function megaFriend(friends){
    var longName = friends[0];
    for(i = 0; i < friends.length; i++){
        if(friends[i].length > longName.length){
            longName = friends[i];
        }
    }
    return longName;
}

var friends = ["Kamal", "Tanvir", "Jahangir"];
console.log(megaFriend(friends));