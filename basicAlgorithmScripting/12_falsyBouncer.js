// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

/* my original answer */
const bouncer = arr =>
  arr.filter(Boolean)
  // return arr.filter(el => el); also works

console.log(bouncer(['',' ',1,0,false,null,undefined]))
