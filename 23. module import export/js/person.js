class Person {
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }


    ShowInfo(){
        console.log(`Name: ${this.name} Surname: ${this.name} Age: ${this.age}`);
    }
}

export default Person ;
