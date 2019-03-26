function Dog(name, breed, age) {
  this.name = name;
  this.breed = breed;
  this.age = age;
  this.ShowInfo = function () {
    console.log(`Name: ${this.name} Breed: ${this.breed} Age: ${this.age}`);
  }
}


var Tuzik = new Dog("Tuzik", "Taxa", 2);
var Bobik = new Dog("Bobik", "Doberman", 3);
Bobik.ShowInfo();
Tuzik.ShowInfo();

//console.log(Tuzik);
//console.log(Bobik);
// var dogArr = [Tuzik, Bobik];
// console.log(dogArr);
// console.log(typeof Dog);

var dogArr = [];
dogArr.push({Tuzik});
dogArr.push({Bobik});
console.log(dogArr);

dogArr.forEach(function(item, index){
  console.log(`${item} ${index}`);
})

