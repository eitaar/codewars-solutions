function humanReadable (seconds) {
  return Object.values({"h":Math.floor(seconds/3600),"min": Math.floor(seconds/60) % 60,"sec": seconds % 60}).map((num) => num.toString().padStart(2, "0")).join(":");
}