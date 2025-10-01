function findOdd(A) {
  let counter = {};
  for(let num of A) {
    counter[num] = (counter[num] || 0) + 1;
  }
  for(let key of Object.keys(counter)) {
    if(counter[key] % 2 !== 0) {
      return parseInt(key);
    }
  }
}