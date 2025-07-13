function isValid(voled) {
  return Boolean(voled) && voled.length >= 4 && !voled.includes (" ");
  
}