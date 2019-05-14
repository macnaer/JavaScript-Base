class Dog{
  constructor(name, breed, age){
    this.name = name;
    this.breed = breed;
    this.age = age;
  }

   ShowDogInfo(){
    console.log("Name: ", this.name, " Breed: ", this.breed, " Age: ", this.age);
  }
}

let Bob = new Dog("Bob", "Taxa", 3);
Bob.ShowDogInfo();

class HunterDog extends Dog{
  constructor(name, breed, age, power){
    super(name, breed, age);
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.power = power;
  }

  Health(){
    setInterval(()=>{
      console.log(`Power = ${this.power}`);
      if (this.power < 100){
        console.log("Works");
        this.power += 10;
      }
    }, 5000)
  }
  ShowDogInfo() {
    console.log("Name: ", this.name, " Breed: ", this.breed, " Age: ", this.age, " Power: ", this.power);
  }
  Fight(){
    if ( this.power <= 0){
      console.log(`${this.name} is die!`);
      return;
    }
    else{
      this.power -= 20;
    }
  }

}

let Rex = new HunterDog("Rex", "Bulldog", 4, 100);
Rex.ShowDogInfo();
Rex.Fight();
Rex.Health();
Rex.ShowDogInfo();
setTimeout(function(){
  Rex.ShowDogInfo();
}, 6000);


setTimeout(function () {
  Rex.ShowDogInfo();
}, 11000);


setTimeout(function() {
  Rex.ShowDogInfo();
}, 16000);