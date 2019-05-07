let a = 10;
console.log(typeof (a));

//let a = "wefwef1";

const pi = 20;
console.log(pi);
//pi = 10;

arrow = () => {
  console.log("Arrow function");
}
arrow();

arrow2 = (a, b) =>{
  return a + b;
}

console.log(arrow2(3,4));



class Person {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;

  }

  ShowPerson() {
    console.log("Name:", this.name, " Surname: ", this.surname, " Age: ", this.age);
  }

}


let Bill = new Person("Bill", "Gates", 55);
Bill.ShowPerson();