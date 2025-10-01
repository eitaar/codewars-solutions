function spinWords(string){
  let words = string.split(" ");
  let modified = [];
  for(let word of words) {
    if(word.length >= 5) {
      modified.push(word.split("").reverse().join(""));
    } else {
      modified.push(word);
    }
  }
  return modified.join(" ");
}