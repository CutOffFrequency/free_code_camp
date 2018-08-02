function uniteUnique(arr) {
  arr = [...arguments];
  let aSet = new Set([]);
  arr = arr.reduce((a, b) => a.concat(b));
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
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
