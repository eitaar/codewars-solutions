function solution(list) {
  let arr = [];
  let range = [];
  let prevNum = list[0];
  let txt = ""
  range.push(prevNum);
​
  for (let i = 1; i < list.length; i++) {
    let num = list[i];
    if (prevNum + 1 === num && list[i+1] == num+1) {
      arr.push(`*`);
    } else {
      arr.push(num);
    }
    prevNum = num;
  }
  for(let i = 0;i < arr.length;i++) {
    let point = arr[i];
    let nextPoint = arr[i+1];
    if(point == "*" && nextPoint != "*") {
      range.push("-");
    } else if(point != "*") {
      range.push(point);
    }
  }
  for(let i = 0;i<range.length;i++) {
    let char = range[i];
    if(range[i+1] == "-") {
      txt += char;
    } else if(char == "-") {
      txt += "-";
    } else {
      txt += `${char},`
    }
  }
  return txt.slice(0, txt.length-1)
}