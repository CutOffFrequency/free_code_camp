function dropElements(arr, func) {
  let i = 0,
    p = -1;
  while (i < arr.length - 1) {
    if (func(arr[i])) {
      p = i;
      break;
    }
    i++;
  }
  return p < 0 ? [] : arr.slice(p);
}

console.log(
  dropElements([1, 2, 3], function(n) {
    return n < 3;
  })
);
