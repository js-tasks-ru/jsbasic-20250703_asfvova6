function showSalary(users, age) {
  let SalariName = users.filter (users =>users.age <= age);
  let names = SalariName.map(users =>`${users.name}, ${users.balance}`).join('\n');
  return names;
}
  let users1 = {
  balance: "$1,825.00",
  age: 30,
  name: "Not Valera",
  gender: "male",
  greeting: "Hello, Golden Branch! You have 7 unread messages.",
  favouriteFruit: "banana"
};
let users2 = {
  balance: "$1,825.65",
  age: 40,
  name: "Valera",
  gender: "male",
  greeting: "Hello, Golden Branch! You have 7 unread messages.",
  favouriteFruit: "banana"
};
const age = 40;
let users =[users1 , users2];
console.log (showSalary(users , age));