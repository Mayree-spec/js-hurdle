
let count = 50;
for (let i = 0; i <= count; i++ ) {
    if (i%3 === 0 && i%5 === 0) {
        console.log("fizzbuzz")
    }
    if (i%3 === 0){
        console.log("fizz")
    }
    if (i%5 === 0){
        console.log("buzz")
    } else {
        console.log(i);
    }
}
//the for loop doesn't use return, the return keyword terminates on the first iteration 