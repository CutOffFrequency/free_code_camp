const addTogether = () => {
  let args = [...arguments];
  let validateNumericArg = x => typeof x == "number";
  let func = (x, y) => {
    if (validateNumericArg(y)) return x + y;
    return undefined;
  };
  return args.length == 1 && validateNumericArg(args[0])
    ? y => func(args[0], y)
    : func(args[0], args[1]);
};

console.log(addTogether(2, 3));
