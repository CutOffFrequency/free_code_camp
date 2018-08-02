let sumFibs = num => {
  let calcFibs = (limit, seq) => {
    while (seq[seq.length - 1] + seq[seq.length - 2] <= limit) {
      seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
    }
    return seq;
  };
  if (num == 1) return 1;
  return calcFibs(num, [1, 1, 2]).reduce((a, b) => {
    return b % 2 != 0 ? a + b : a;
  }, 0);
};

console.log(sumFibs(20));
