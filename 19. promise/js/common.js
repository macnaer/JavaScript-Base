// setTimeout(()=>{
//   console.log("Request number 1");
//   setTimeout(() => {
//     console.log("Request number2");
//     setTimeout(()=>{
//       console.log("Request number3");
//     },6000)
//   }, 3000);
// },5000)

var promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    console.log("Start process");
    resolve();
    //reject("Bed idea!");
  }, 2000);
})

  .then(function() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        var car = {
          brend: "Tesla",
          model: "X"
        };

        console.log("You want to buy: ", car);
        //reject("Not enough money!");
        resolve(car);
      }, 500);
    });
  })
  .then(function(car) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log("CTO checking...");
        var car = {
          brend: "Tesla",
          model: "X",
          techStatus: "checked"
        };
        console.log("Technical status: ", car);
        resolve(car);
        //reject('Technical status bad!')
      }, 500);
    });
  })
  .then(car => {
    setTimeout(function() {
      return new Promise(function(resolve, reject) {
        console.log("Police checking...");
        var car = {
          brend: "Tesla",
          model: "X",
          techStatus: "checked",
          policeStatus: "checked"
        };
        console.log("Police status: ", car);
        resolve(car);
       // reject("Police status bad!");
      }, 500);
    });
  })
  .then(car => {
    setTimeout(function() {
      return new Promise(function(resolve, reject) {
        console.log("Car status...");
        var car = {
          brend: "Tesla",
          model: "X",
          techStatus: "checked",
          policeStatus: "checked",
          status: "bought"
        };
        console.log("Car status: ", car);
        resolve(car);
        //reject("Opsss!");
      }, 500);
    });
  })
  .then(function(car) {
    console.log("You bought: ", car);
  })
  .catch(function(error) {
    console.log(error);
  });
