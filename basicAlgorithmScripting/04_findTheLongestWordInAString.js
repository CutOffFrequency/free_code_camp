// Return the length of the longest word in the provided sentence.

// Your response should be a number.

/* my original answer */
// function findLongestWord(str) {
//   let len = 1;
//   let arr = str.split(" ");
//   for (let el of arr) {
//     if (el.length > len) {
//       len = el.length;
//     }
//   }
//   return len;
// }

/* better solution */
// function findLongestWord(str) {
//   var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
//   return longestWord[0].length;
// }

/* best solution */
const findLongestWord = str => {
    var longestWord = str.split(' ').reduce( (longest, currentWord) => {
        return currentWord.length > longest.length ? currentWord : longest
    }, '');
    return longestWord.length
}

console.log( findLongestWord("The quick brown fox jumped over the lazy dog") )
