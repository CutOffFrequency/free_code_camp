// this basic solution takes the largest number in the set and keeps adding until
// it is divisible by every number in the set, using the brute force method like
// this will be less peformant for longer number ranges as it iterates over the
// entire collection an exponentially large amount of times

// function smallestCommons(arr) {
//   var max = Math.max(...arr);
//   var min = Math.min(...arr);
//   var multiple = max;

//   for(var i = max; i >= min; i--){
//     if(multiple % i !== 0){
//       multiple += max;
//       i = max;
//     }
//   }
//   return multiple;
// }

// this solution is more optimal for longer ranges as it only checks for divisibility
// by prime factors

const smallestCommons = arr => {
  // calculate range of terms from argument array
  let min = Math.min(...arr),
    values = [],
    primes = [2],
    p = 3;
  while (min <= Math.max(...arr)) {
    values.push(min);
    min++;
  }
  // get primes up to largest term
  const isPrime = num => {
    for (let i = 0, s = Math.sqrt(num); primes[i] <= s; i++)
      if (num % primes[i] === 0) return false;
    return num > 2;
  };
  while (p <= Math.max(...values)) {
    if (isPrime(p)) primes.push(p);
    p += 2;
  }

  // calculate highest exponent for each prime and return the product
  return primes
    .reduce((final, prime) => {
      let v = values.length - 1,
        value = values[v],
        exponent = 0,
        highest = 0;
      while (v > -1) {
        if (value % prime === 0) {
          value = value / prime;
          exponent += 1;
        } else {
          if (highest < exponent) highest = exponent;
          v--;
          value = values[v];
          exponent = 0;
        }
      }
      return final.concat([prime ** highest]);
    }, [])
    .reduce((a, b) => a * b);
};

console.log(smallestCommons([1, 10]));

// I ended up not needing this function I wrote for a different approach
// but I felt like I should include it
//
// let factorize = num => {
//   let p = primes.length - 1,
//   factors = []
//   while (num > 1 && p > -1) {
//     if (num % primes[p] === 0) {
//       factors.push( primes[p] )
//       num = num / primes[p]
//     } else p--
//   }
//   return factors
// }
