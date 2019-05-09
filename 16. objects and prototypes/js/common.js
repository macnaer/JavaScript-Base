Object.prototype.fight = function(){
  console.log("Fight!!!");
}

function Dog(name, breed, age){
  this.name = name;
  this.breed = breed;
  this.age = age;

  // this.getYear = function(){
  //   return new Date().getFullYear() - this.age;
  // }
}

Dog.prototype.getYear = function(){
  return new Date().getFullYear() - this.age;
}

let Barsik = new Dog("Barsik", "Taxa", 2);

console.log(Barsik.hasOwnProperty("age"));

console.log(Barsik.getYear());
console.log(Barsik.fight());

function Cat(name, breed, age) {
  this.name = name;
  this.breed = breed;
  this.age = age;

  // this.getYear = function(){
  //   return new Date().getFullYear() - this.age;
  // }
}

let Murzik = new Cat("Murzik", "Pers", 4);
Murzik.fight();

let arr = ["test", 3425436];


let xhr = new XMLHttpRequest();
xhr.open("GET", "https://swapi.co/api/people", true);
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.readyState != 4) return;

  if (xhr.status != 200) {
    var errStatus = xhr.status;
    var errText = xhr.statusText;
    console.log(errStatus + ": " + errText);
  } else {
    var data = JSON.parse(xhr.responseText);
    console.log(data);
  }
};
