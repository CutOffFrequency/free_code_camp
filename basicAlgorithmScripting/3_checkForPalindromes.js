// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".


/* my original answer */

// function palindrome(str) {
//   str = str.toLowerCase();
//   str = str.replace(/[^a-z0-9]/g, "");
//   let checks = Math.floor(str.length/2);
//   let arr = str.split("");
//   for (let i = 0; i < checks; i += 1) {
//     let left = arr[i];
//     let right = arr[arr.length-(i+1)];
//     if (left !== right) {
//         console.log(left + ":" + right);
//         return false;
//     }
//   }
//   return true;
// }


/* better solution */

function palindrome(str) {
  var regex = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(regex, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}

palindrome("eye");