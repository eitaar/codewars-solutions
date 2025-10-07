function topThreeWords(text) {
  let words = text.toLowerCase().replace(/[^a-zA-Z']/g, " ").replace(/\s+/g, " ").trim().split(" ");
  let dict = {}
  for(let word of words) {
    dict[word] = (dict[word]||0) + 1;
  }
  let sorted = Object.fromEntries(
    Object.entries(dict).sort(([,v1], [,v2])=> {
      return v1-v2;
    }).reverse()
  );
  return Object.keys(sorted).filter((word)=>word.length > 0 && /^[a-z]/g.test(word)).slice(0,3);
}