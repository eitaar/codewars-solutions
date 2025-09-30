function expandedForm(num) {
  let numarr = num.toString().split("").reverse();
  let finarr = [];
  for(let i = 0; i <numarr.length;i++) {
    let numChar = numarr[i];
    for(let j = 0; j < i;j++) {
      numChar += "0";
    }
    finarr.push(numChar);
  }
  return finarr.reverse().filter((num)=> num > 0).join(" + ");
}