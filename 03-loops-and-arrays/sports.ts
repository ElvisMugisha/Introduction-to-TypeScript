let sportsOne: string[] = ['FootBall', 'BasketBall', 'VolleBall', 'Swimming'];

for (let i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}

// Simplified for loop
for (let tempSport of sportsOne) {
    console.log(tempSport);
}

// Conditions
for (let someSport of sportsOne) {
    if (someSport == "BasketBall") {
        console.log(someSport + " << Require strength!");
    }
    else {
        console.log(someSport);
    }
}

// Growable arrays
let sportsTwo: string[] = ['FootBall', 'BasketBall', 'VolleBall', 'Swimming'];

sportsTwo.push('Tennis');
sportsTwo.push('Golf');
sportsTwo.push('Cricket');

for (let someSportTwo of sportsTwo) {
    console.log(someSportTwo);
}
