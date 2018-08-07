// function translatePigLatin(str) {
//   let clusters = ['bl', 'br', 'ch', 'ck', 'cl', 'cr', 'dr', 'fl', 'fr', 'gh', 'gl', 'gr', 'ng', 'ph', 'pl', 'pr', 'qu', 'sc', 'sh', 'sk', 'sl', 'sm', 'sn', 'sp', 'st', 'sw', 'th', 'tr', 'tw', 'wh', 'wr']
//   let shift = vIndex => {
//     return str.slice(vIndex, str.length) + str.slice(0, vIndex) + 'ay'
//   }
//   return str.search(/[a,e,i,o,u]/) === 0 ?
//   str + 'way' :
//     str.search(/[a,e,i,o,u]/) > 0 ?
//       shift(str.search(/[a,e,i,o,u]/)) :
//       clusters.indexOf(str.slice(0,2) > -1) ?
//       shift(2) :
//       shift(1)
// }

const translatePigLatin = str => {
  return str
    .replace(/^([aeiou])(.*)/, "$1$2way")
    .replace(/^([^aeiou]+)(.*)/, "$2$1ay");
};

console.log(translatePigLatin("dang"));
console.log(translatePigLatin("ohyeah"));
