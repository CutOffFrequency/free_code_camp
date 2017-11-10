// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

/* my original solution */

// function rot13(str) {
//   str = str.split(" ");
//   str = str.map(x => {
//     return x.split("").map( letter => {
//       let char = letter.charCodeAt(0);
//       if (char < 65 || char > 122 || char > 90 && char < 97) return letter;
//       return char > 77 && char < 109 || char > 109 ?
//           String.fromCharCode( char-13 ) :
//           String.fromCharCode( char+13 );
//     }).join("");
//   });
//   return str.join(" ");
// }


/* improved solution */

function rot13(str) { // LBH QVQ VG!
  let toAdd = (s) => s.charCodeAt(0) > 97 ? 91 : 65;
  return str.replace(/[a-zA-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + toAdd(L)));
}