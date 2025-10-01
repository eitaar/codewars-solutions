function countBits(n) {
  let bin =  n.toString(2);
  let sum = 0;
  for(let char of bin.split("")) {
    sum += parseInt(char);
  }
  return sum
}