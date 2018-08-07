// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

/* my original solution */
// function mutation(arr) {
//   let first = arr[0].toLowerCase();
//   let second = arr[1].toLowerCase();
//   for (el of second.split("")) {
//     if (first.indexOf(el) < 0 ) {
//     // if (!first.includes(el) ) { also works
//         return false;
//     }
//   }
//   return true;
// }

/* better solution */
const mutation = arr =>
  arr[1]
    .toLowerCase()
    .split("")
    .every(letter => arr[0].toLowerCase().indexOf(letter) !== -1);

console.log(mutation(["hello", "he"]));
