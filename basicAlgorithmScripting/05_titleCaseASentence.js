// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

/* my original answer */

// function titleCase(str) {
//   let newArr = [];
//   str = str.toLowerCase();
//   let arr = str.split(" ");
//   for (let i=0; i < arr.length; i += 1) {
//     let string = arr[i].split("");
//     string[0] = string[0].toUpperCase();
//     string = string.join("");
//     newArr.push(string);
//   }
//   return newArr.join(" ");
// }

/* same approach: less caching */
// function titleCase(str) {
//   str = str.toLowerCase().split(' ');
//   for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//   }
//   return str.join(' ');
// }

/* better answer */
const titleCase = str => {
    return str.toLowerCase().split(' ').map( (word) => {
        return word.replace( word[0], word[0].toUpperCase() )
        // return ( word.charAt(0).toUpperCase() + word.slice(1) ) also works
    }).join(' ')
}

console.log( titleCase("I'm a little tea pot") )
