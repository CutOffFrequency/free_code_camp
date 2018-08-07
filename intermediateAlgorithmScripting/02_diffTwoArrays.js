// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

/* my original answer */

// function diffArray(arr1, arr2) {
//   return arr1.filter((el => {
//       return arr2.indexOf(el) < 0;
//     })
//   ).concat( arr2.filter((el => {
//       return arr1.indexOf(el) < 0;
//     })
//   ));
// };

/* cleaner variants */

// function diffArray(arr1, arr2) {
//   return arr1
//     .concat(arr2)
//     .filter(
//         item => !arr1.includes(item) || !arr2.includes(item)
//     )
// }

const diffArray = (arr1, arr2) =>
  arr1
    .filter(el => !arr2.includes(el))
    .concat(arr2.filter(el => !arr1.includes(el)));

console.log(diffArray([1, 2], [2, 3]));
