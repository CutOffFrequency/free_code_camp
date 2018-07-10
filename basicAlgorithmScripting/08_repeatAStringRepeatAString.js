// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

/* my original answer */
// function repeatStringNumTimes(str, num) {
//   // repeat after me
//   let final = "";
//   if (num > 0) {
//     for (let i = 0; i < num; i += 1) {
//       final = final + str;
//     }
//   }
//   return final;
// }

/* better answer */
// function repeatStringNumTimes(string, times) {
//   var repeatedString = "";
//   while (times > 0) {
//     repeatedString += string;
//     times--;
//   }
//   return repeatedString;
// }

// why is this better?
// 1: decrementing is more performant than incrementing
// 2: this while loop uses an existing variable instead of caching a new one

/* answer with recursion */

// function repeatStringNumTimes(string, times) {
//     if (times < 0) {
//         return "";
//     }
//     if (times === 1) {
//         return string;
//     } else {
//         return string + repeatStringNumTimes(string, times - 1);
//     }
// }

/* best answer */
const repeatStringNumTimes = (string, times) =>
    times > 0 ? string.repeat(times) : ""

console.log( repeatStringNumTimes('CAR', 5) )
