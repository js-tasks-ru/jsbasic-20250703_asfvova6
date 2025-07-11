function truncate(str, maxlength) {
  if (str.length>maxlength){
    return str.substring(0,maxlength - 1) +'…';
  }
  return str;
}
console.log (truncate("какой прекрасный день сейчас", 20));
console.log (truncate("какой день"));
console.log (truncate("какой прекрасный день", 10));