// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.

/* my original answer */
// const reverseString = str => str.split('').reverse().join('')

/* better */
// const forReverseString = str => {
//     let finalStr = ''
//     for (let i = str.length -1; i > -1; i -= 1) {
//         finalStr += str[i]
//     }
//     return finalStr
// }

/* best imho */
const recursiveReverseString = str =>
  str !== "" ? recursiveReverseString(str.substr(1)) + str.charAt(0) : "";

console.log(recursiveReverseString("hello"));
