function ipsBetween(start, end){
  let startArr = start.split(".").reverse();
  let endArr = end.split(".").reverse();
  let startSum = 0;
  let endSum = 0;
  for(let i =0;i < startArr.length; i++) {
    startArr[i] *= i > 0?256**(i):1
  }
  for(let i =0;i < endArr.length; i++) {
    endArr[i] *= i > 0?256**(i):1
  }
  startArr.forEach((num) => {startSum += num;});
  endArr.forEach((num)=>{endSum+=num});
  return endSum-startSum
}