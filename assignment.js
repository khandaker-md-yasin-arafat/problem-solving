// https://github.com/kmya/problem-solving

// Problem - 1
function kilometerToMeter(kilometer){
    // 1 Kilometer = 1000 Meter
    var meter = kilometer * 1000;
    return meter;
}

// Problem - 2
function budgetCalculator(watch, phone, laptop){
    // Per watch price is 50 tk
    var watch = watch * 50;
    // Per phone price is 100 tk
    var phone = phone * 100;
    // Per laptop price is 500 tk
    var laptop = laptop * 500;
    var total = watch + phone + laptop;
    return total; 
}

// Problem - 3 
function hotelCost(day){
    var cost = 0;
    // Day 1 to day 10 cost is 100 tk per day
    if(day <= 10){
        cost = day * 100;
    }
    // Day 11 to day 20 cost is 80 tk per day
    else if(day <= 20){
        var firstTime = 10 * 100;
        var dueDay = day - 10;
        var secondTime = dueDay * 80;
        cost = firstTime + secondTime;
    }
    // Day 21 to next any day cost is 50 tk per day
    else{
        var firstTime = 10 * 100;
        var secondTime = 10 * 80; 
        var dueDay = day - 20;
        var thirdTime = dueDay * 50;
        cost = firstTime + secondTime +thirdTime;
    }
    return cost;
}

// Problem - 4
function megaFriend(friends){
    var longName = friends[0];
    for(i = 0; i < friends.length; i++){
        if(friends[i].length > longName.length){
            longName = friends[i];
        }
    }
    return longName;
}
