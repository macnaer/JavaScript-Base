console.log("Works");




// var x = 100;
// var y = 20;

// function Sum (a, b){
//     console.log(a + b);
// }

// Sum(100, 20000);

// console.log(typeof(Sum))


// var a = "a string ";

// Sum();

// var a = {

// }

// Sum();



function Avg (a =0 , b = 0, c = 0){
  var result = (a + b + c) / 3;
  return result;
  console.log("ANG WORKS!!!!!!");
}

//console.log(Avg(3,12,12));



function Money(avg) {
    console.log(avg);
  if (avg >= 10) {
    console.log("Success!");
  } else {
    console.log("Deny!");
  }
}


var avg = Avg(12, 12, 12);
Money(avg);
