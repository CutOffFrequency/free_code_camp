// minimum solution

// const uniteUnique = arr => {
//   const args = [].concat(...arguments);
//   return [...new Set(args)];
// };

// this solution is more robust in that it distinguishes between duplicate values at
// different depths
const uniteUnique = arr => {
  let aSet = new Set([]);
  arr = [...arguments].reduce((a, b) => a.concat(b));
  return arr.reduce((a, b) => {
    if (typeof b == "number") {
      if (!aSet.has(b)) {
        aSet.add(b);
        a.push(b);
      }
      return a;
    }
    if (Array.isArray(b)) {
      if (!aSet.has(b[0])) {
        aSet.add(b[0]);
        a.push(b);
      }
      return a;
    }
  }, []);
};
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
