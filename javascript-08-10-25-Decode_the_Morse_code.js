decodeMorse = function(morseCode){
  return morseCode.trim().split("   ").map(word=>{return word.split(" ").map(code=>MORSE_CODE[code]).join("")}).join(" ")
}