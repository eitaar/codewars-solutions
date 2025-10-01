function rgb(r, g, b) {
  return [0 <= r && r <= 255?r.toString(16):r < 0?"00":"FF", 0 <= g && g <= 255?g.toString(16):g < 0?"00":"FF", 0 <= b && b <= 255?b.toString(16):b < 0?"00":"FF"].map((colour) => colour.toUpperCase().padStart(2,"0")).join("")
}