// var counter = 1;

// function Recursion(number) {
  
//   console.log(counter);
//   if (counter < number) {
//     console.log("Inside");
//     counter++;
//     Recursion(number);
//   }
// }

// Recursion(5);

/*
 var arr = ["Tom",5.1243124,12,false,44,333];

 console.log(arr);
 console.log("length = ", arr.length);*/
// console.log("index 4 = ", arr[4]);
// arr[4] = 555;
// console.log("index 4 = ", arr[4]);
// console.log(arr);

// var arr = [["Bobo", 12, 45], "Ted", true, 23423];
// console.log(arr);
// console.log(arr[0][0]);
// arr[0][0] = "Bobik";
// console.log(arr[0][0]);
// console.log(arr[0][2]);

 //var arrNames = [3, 4213, 4, 32, 4324, 6, 32432, 423, 34];
/*console.log(arrNames);
console.log(arrNames.length);*/

/*var forCounter = 0;
var indexFor4 = 0;
var indexFor6 = 0;
var tmp = 0;
for (var i = 0; i < arrNames.length; i++){
  console.log(arrNames[i]);
  if (arrNames[i] == 4){
    indexFor4 = i;
    forCounter++
  }
  if (arrNames[i] == 6){
    indexFor6 = i;
  }
 }



console.log(arrNames);
console.log("4 = ", forCounter);
console.log("index4 = ", indexFor4);
console.log("index6 = ", indexFor6);
console.log("-------------------------------->>>>>");

tmp = arrNames[indexFor4];
arrNames[indexFor4] = arrNames[indexFor6];
arrNames[indexFor6] = tmp;


console.log(arrNames);*/


var arr = [];
var plus = 0;
var minus = 0;
for (var i = 0; i < 7; i++){
  arr[i] = Math.floor(Math.random() * (50 + 12)) - 12  ;
}

for (var i = 0; i < 7; i++) {
  console.log(arr[i]);
}

for (var i = 0; i < 7; i++){
  if (0 < arr[i]){
    plus++;
  }
  else if (0 > arr[i]){
    minus++;
  }
}


console.log("+ = ", plus);
console.log("- = ", minus);