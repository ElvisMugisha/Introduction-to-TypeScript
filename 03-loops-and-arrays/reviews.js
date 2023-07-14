var reviews = [5, 5, 4.5, 1, 3];
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
}
// Reviews average
var total = 0;
for (var a = 0; a < reviews.length; a++) {
    console.log(reviews[a]);
    total += reviews[a];
}
var average = total / reviews.length;
console.log("Average review is " + average);
