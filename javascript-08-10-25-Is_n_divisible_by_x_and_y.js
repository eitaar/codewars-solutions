function isDivisible(n, x, y) {
  return n/x == Math.floor(n/x) && n/y == Math.floor(n/y);
}