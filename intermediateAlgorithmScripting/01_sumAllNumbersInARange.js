// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.\


/* my original solution */

// function sumAll(arr) {
//   let high = Math.max.apply(null, arr)
//   let low = Math.min.apply(null, arr)
//   let total = low
//   while (low < high) {
//     total = total + low
//     low += 1
//   }

//   return total;
// }


/* my original solution */

// function sumAll(arr) {
//   let low = Math.min(...arr);
//   let total = 0;
//   while (low <= Math.max(...arr)) {
//     total = total + low;
//     low += 1;
//   }
//   return total;
// }

/* solutiion using reduce */

function sumAll(arr) {
  const start = Math.min(...arr);
  const stop = Math.max(...arr) + 1; 
  return [...Array(stop-start).keys()].reduce((a, b) => a+b+start, 0);
}