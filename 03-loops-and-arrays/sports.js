var sportsOne = ['FootBall', 'BasketBall', 'VolleBall', 'Swimming'];
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
// Simplified for loop
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    console.log(tempSport);
}
// Conditions
for (var _a = 0, sportsOne_2 = sportsOne; _a < sportsOne_2.length; _a++) {
    var someSport = sportsOne_2[_a];
    if (someSport == "BasketBall") {
        console.log(someSport + " << Require strength!");
    }
    else {
        console.log(someSport);
    }
}
// Growable arrays
var sportsTwo = ['FootBall', 'BasketBall', 'VolleBall', 'Swimming'];
sportsTwo.push('Tennis');
sportsTwo.push('Golf');
sportsTwo.push('Cricket');
for (var _b = 0, sportsTwo_1 = sportsTwo; _b < sportsTwo_1.length; _b++) {
    var someSportTwo = sportsTwo_1[_b];
    console.log(someSportTwo);
}
