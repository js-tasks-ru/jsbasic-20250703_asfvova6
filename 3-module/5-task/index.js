function getMinMax(str) {
  let MinMax = str
  .split (/[^0-9.-]+/)
  .filter(arr => arr != '' && !isNaN (arr))
  .map(Number)
  let result = {
    min: MinMax.reduce((a, b) => Math.min(a, b)),
    max: MinMax.reduce((a, b) => Math.max(a, b)),
}
return result;
}
const str = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';
console.log (getMinMax(str))