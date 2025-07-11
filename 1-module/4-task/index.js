function checkSpam(str) {
  let spam = ["1XbeT now", "free xxxxx"];
  for (let notSpam of spam){
  if (str.includes(notSpam))
  return true;
  }
  return false;

}