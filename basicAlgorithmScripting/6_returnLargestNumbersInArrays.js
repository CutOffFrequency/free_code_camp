// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].


/* my original answer */

// function largestOfFour(arrs) {
//   let final = [];
//   for (let arr of arrs) {
//     let highest = 0;
//     for (let el of arr) {
//       if (el > highest) highest = el;
//     }
//     final.push(highest);
//   }
//   return final;
// }

/* better answer */

// function largestOfFour(mainArray) {
//   return mainArray.map(function (subArray){
//     return subArray.reduce(function (previousLargestNumber, currentLargestNumber) {
//       return (currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber;
//     }, 0);
//   });
// }

/* best answer */

function largestOfFour(mainArray) {
  return mainArray.map(function(subArray) {
    return Math.max.apply(null, subArray);
  });
}