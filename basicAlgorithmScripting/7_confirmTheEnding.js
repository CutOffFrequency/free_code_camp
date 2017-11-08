// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

/* my original answer */

function confirmEnding(str, target) {
  return str.substr(-target.length) === target ? true : false;
  // return str.substr(-target.length) is more succinct
  // return string.endsWith(target) also works
}

confirmEnding("Bastian", "n");