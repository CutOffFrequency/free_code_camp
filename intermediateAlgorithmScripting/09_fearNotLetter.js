let fearNotLetter = str => {
  let missing;
  str.split("").map((a, b, c) => {
    if (missing || b == c.length - 1) return;
    if (a.charCodeAt(0) < c[b + 1].charCodeAt(0) - 1) {
      missing = String.fromCharCode(a.charCodeAt(0) + 1);
    }
  });
  return missing;
};

console.log(fearNotLetter("abce"));
