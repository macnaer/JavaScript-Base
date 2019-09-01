
let Person = (function(){
  let name = "Bill";
  let surname = "Gates"
  let age = 50;

  getAge = function(){
    console.log(age);
  }

  return {
    name: name,
    surname: surname,
    getAge: getAge
  }


}())

console.log(Person);
console.log(Person.name);
console.log(Person.surname);
Person.getAge();
Person.age = 100;
console.log(Person);
Person.getAge();