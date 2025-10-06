function calculate(num1, num2) {
    let total = [0, 0];
    for(let i = 0;i < num1.length;i++) {
      let bit = num1.split("").reverse()[i];
      if (bit == "1") {
        total[0] += Math.pow(2, i);
      }
    }
  for(let i = 0;i < num2.length;i++) {
    let bit = num2.split("").reverse()[i];
    if (bit == "1") {
      total[1] += Math.pow(2, i);
    }
  }
  return total[0] + total[1];
}