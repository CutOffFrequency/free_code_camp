// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

/* my original answer */

function bouncer(arr) {
  return arr.filter(Boolean);
  // return arr.filter(el => el); also works
}
