function rgb(r, g, b) {
  let arr = [0 <= r && r <= 255?r.toString(16):r < 0?"00":"FF", 0 <= g && g <= 255?g.toString(16):g < 0?"00":"FF", 0 <= b && b <= 255?b.toString(16):b < 0?"00":"FF"];
  console.log(arr)
  let hexCode = "";
  return arr.map((colour) => colour.toUpperCase().padStart(2,"0")).join("")
}