function namify(users) {
  return users.reduce(function (names , user){
    names.push(user.name);
    return names;
  },[]);
}
users = [
  {name:'Ваня', age: 25},
]
