const sumPrimes = num => {
  let primes = [2],
    p = 3;
  if (num < 2) return 0;
  // primes are tested using the trial division method with some optimizations:
  // we only need to check for prime factors up to the target number's square root
  // each prime after 2 is odd so we can increment the counter by 2
  const isPrime = num => {
    for (let i = 0, s = Math.sqrt(num); primes[i] <= s; i++)
      if (num % primes[i] === 0) return false;
    return num > 2;
  };
  while (p <= num) {
    if (isPrime(p)) primes.push(p);
    p += 2;
  }
  return primes.reduce((a, b) => a + b);
};
console.log(sumPrimes(10));
