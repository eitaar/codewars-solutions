        factors[factor] = (factors[factor] || 0) + 1;
class PrimeFactorizer {
  constructor(num) {
    this.num = num
  }
  get factor() {
    return this.PrimeFactorizer(this.num);
  }
  
  isPrime(num) {
    if (num === 2) return true;
    if (num% 2 === 0) return false;
    for(let i = 3;i < Math.sqrt(num); i += 2) {
      if(num%i == 0) {
        return false
      }
    }
    return true
  }
  
  getNextPrime(prevPrime) {
    let nextNum = prevPrime + 1;
    while (true) {
      if (this.isPrime(nextNum)) {
        return nextNum;
      }
      nextNum++;
    }
  }
  
  PrimeFactorizer(n) {
    let factors = {};
    let num = n;
    let nextPrime = 2;
    let factor = 3;
    while (num % 2 == 0) {
      factors[2] = factors[2]?factors[2]+1:1;
      num /= 2;
    }
    while (factor < Math.sqrt(num)) {
      while(num % factor == 0) {
        factors[factor] = factors[factor]?factors[factor]+1:1;
        num /= factor;
      }
      factor += 2;
    }
    if (num > 1) {
      factors[num] = factors[num]?factors[num] + 1:1;
    }
    return factors;
  }
}