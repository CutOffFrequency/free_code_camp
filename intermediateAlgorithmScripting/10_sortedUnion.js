/* my original answer */
// function uniteUnique(arr) {
//   let aSet = new Set([]);
//   arr = [...arguments].reduce((a, b) => a.concat(b));
//   return arr.reduce((a, b) => {
//     if (typeof b == "number") {
//       if (!aSet.has(b)) {
//         aSet.add(b);
//         a.push(b);
//       }
//       return a;
//     }
//     if (Array.isArray(b)) {
//       if (!aSet.has(b[0])) {
//         aSet.add(b[0]);
//         a.push(b);
//       }
//       return a;
//     }
//   }, []);
// }
// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// the solution below is of course more concise so I have updated it
// HOWEVER,
// the solution below yeilds a result with unique numerical values for each
// arguments array presented for this challenge only because the arguments arrays
// presented do not contain duplicate values at different depths!
// calling the function like so:
// uniteUnique([1, 3, 2], [[5], 2, 1, 4], [2, 1, 5]))
// would yield a result with values: 5 & [5] which are of course, not unique values
// according to my original interpretation of the challenge

function uniteUnique(arr) {
  const args = [].concat(...arguments);
  return [...new Set(args)];
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
