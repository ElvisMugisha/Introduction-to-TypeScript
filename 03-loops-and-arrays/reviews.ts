let reviews: number[] = [5, 5, 4.5, 1, 3]

for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
}

// Reviews average
let total: number = 0;

for (let a = 0; a < reviews.length; a++) {
    console.log(reviews[a]);
    total += reviews[a];
}
let average: number = total / reviews.length;

console.log("Average review is " + average);