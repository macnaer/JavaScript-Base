// var sellCar = function(carName)
// {
//   var count = 0;

//   return function(){
//     console.log(carName, ++count);
//   }
// }

// var audi = sellCar("Audi");
// console.log(audi);
// audi();
// audi();
// audi();
// audi();

//  var ford = sellCar("Ford");
//  console.log(ford);
// ford();
// ford();

// audi();
// ford();
// ford();
// ford();
// ford();
// ford();
// ford();
// ford();
// ford();
// ford();
// ford();
// ford();
// ford();


// audi();


// function makeAdd(x) {
//   var x = x;
//   console.log("x = ", x);
//   return function (y) {
//     console.log("y = ", y);
//     return x + y;
//   };
// };

//  var add = makeAdd(5);
//  console.log(add);
//  console.log(add(80));





//console.log(add5(6));  // 7

function makeFunc(newName) {
  var name = newName;
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc("Chrome");
console.log(myFunc);
myFunc();
