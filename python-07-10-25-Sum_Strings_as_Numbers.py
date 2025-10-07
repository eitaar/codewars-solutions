function sumStrings(a,b) {
  if(/[0-9]/g.test(a) && /[0-9]/g.test(b)) {
    return (BigInt(a) + BigInt(b)).toString();
  } else if (/[0-9]/g.test(a)) {
    return BigInt(a).toString();
  } else if(/[0-9]/g.test(b)) {
    return BigInt(b).toString();
  }
}