function sumPrimes(num) {
  let primes = [],
    p = 2;
  if (num < 2) return 0;
  // primes are tested using the trial division method with some optimizations:
  // we only need to check for prime factors up to the target number's square root
  const isPrime = num => {
    for (let i = 0, s = Math.sqrt(num); primes[i] <= s; i++)
      if (num % primes[i] === 0) return false;
    return num >= 2;
  };
  while (p <= num) {
    if (isPrime(p)) primes.push(p);
    p += 1;
  }
  return primes.reduce((a, b) => a + b);
}
console.log(sumPrimes(10));
