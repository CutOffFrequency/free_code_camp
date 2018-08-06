let steamrollArray = arr => {
  let flatten = arr =>
    arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
  return flatten(arr);
};

console.log(steamrollArray([1, [2], [3, [[4]]]]));
