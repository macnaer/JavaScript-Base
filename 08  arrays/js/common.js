//var arr = [2,3,43,34,6];

// for (var i = 0; i < arr.length; i++) {
//   console.log("Before POP ", arr[i]);
// }

// arr.pop();

// console.log("=============POP====================>");
// for (var i = 0; i < arr.length; i++) {
//   console.log("After POP ", arr[i]);
// }

// console.log("=============Push====================>");
// for(var i = 0; i < arr.length; i++) {
//   console.log("Before Push ", arr[i]);
// }

// arr.push(3);


// for (var i = 0; i < arr.length; i++) {
//   console.log("After Push", arr[i]);
// }

// console.log("=============Shift====================>");
// for (var i = 0; i < arr.length; i++) {
//   console.log("Before Shift ", arr[i]);
// }

// arr.shift();
// console.log("======================================>");
// for (var i = 0; i < arr.length; i++) {
//   console.log("After Shift", arr[i]);
// }


// console.log("=============UnShift====================>");
// for (var i = 0; i < arr.length; i++) {
//   console.log("Before unshift ", arr[i]);
// }

// arr.unshift(111);
// console.log("======================================>");
// for (var i = 0; i < arr.length; i++) {
//   console.log("After Shift", arr[i]);
// }


// console.log("=============Index====================>");

// var arr2 = [1,2,3,4,5];
// arr2[100] = 33;
// console.log(arr2);
// console.log("Arr length: ", arr2.length);

//  for (var i = 0; i < arr2.length; i++) {
//    console.log("Missing index ", arr2[i]);
//  }


// console.log("=================forEach=======================>");

// var arr = [123,12,36,44,55];

// arr.forEach(function(item , index){
//     console.log("Item = ", item, " index = ", index);
// });
// arr.forEach((item, index) => {
//   console.log("Item = ", item, " index = ", index);
// });

// console.log("=================forEach=======================>");

// console.log("=================forOf=======================>");
// var arr = [123, 12, 36, 44, 55];
// var arr2 = [213, 12132, 32346, 42344, 3242332,324325];
// for (var item of arr){
//     console.log("For of ", item);
// }

// console.log("=================forOf=======================>");

// console.log("=================forIn=======================>");
// var arr = [123, 12, 36, 44, 55];
// for (item in arr) {
//     console.log("For in ", item);
// }

// console.log("=================forIn=======================>");



// console.log("=============================================>");

//  var str = prompt("Enter person info!");
//  var arr = [];
//  arr = str.split(',');
//  console.log(arr);  
//  console.log("type", typeof arr);

// var newStr = arr.join(', ');
// console.log(newStr);
// console.log("type", typeof(newStr)); 

console.log("===============Sort===========================>");

 var arr = [1,2,8,14,9,5,17,1];
arr = arr.sort(compareFunction);
function compareFunction(a , b){
  return a - b;
}
 console.log(arr);

 var arrStr = ["Jack", "Bill", "Stive", "Bob", "Mike"];
 arrStr.sort();
 console.log(arrStr);

// var arr = [1, 2, 8, 4, 9, 5, 7, 1];
// console.log(arr);
// arr = arr.reverse();
// console.log(arr);

/*function compareFunction(a, b) {
  return a - b;
}
 var arr = [1,2,8,14,9,15,7,1];
arr = arr.sort(compareFunction);
 console.log(arr);*/

 




