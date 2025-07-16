let calculator = {
  a: 0,
  b: 0, 
read (nam1 = 0 ,nam2 = 0) {
  this.a = Number (nam1);
  this.b = Number (nam2);
},
sum (){
  return this.a + this.b;
},
mul (){
  return this.a * this.b;
},
};
calculator.read(3, 5);
window.calculator = calculator; // делает ваш калькулятор доступным глобально