function hexStringToRGB(hexString) {
  return {r: parseInt(hexString.slice(1).substring(0,2),16),g: parseInt(hexString.slice(1).substring(2,4),16), b: parseInt(hexString.slice(1).substring(4,6),16)}
}