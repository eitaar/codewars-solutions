function formatDuration(seconds) {
  if (!seconds) return "now"
  let isPart = [
    [false, 0, 31536000, "year"],
    [false, 0, 86400, "day"],
    [false, 0, 3600, "hour"],
    [false, 0, 60, "minute"],
    [false, 0, 1, "second"],
  ];
  let text = "";
  let finArr = []
  isPart.forEach((unit) => {
    let count = Math.floor(seconds / unit[2]);
    if ( count > 0) {
      unit[0] = true;
      unit[1] = count
      seconds %= unit[2];
    }
  });
  let newArr = isPart.filter((arr)=> arr[0]);
  newArr.forEach((arr)=>{
    finArr.push(`${arr[1]} ${arr[3]}${arr[1] > 1?"s":""}`)
  })
  return finArr.slice(0, finArr.length-1).join(", ")+`${finArr.length > 1?" and ":""}`+finArr[finArr.length-1]
}