console.log("Works!");

// DOM Access

//  var rootElement = document.getElementById("root");
//  console.log(rootElement);

//   var h1 = document.getElementsByTagName("h1");
//   console.log(h1);

//  var p = document.getElementsByClassName("text")[1];
//  console.log(p);

// var QuerySelector = document.querySelector(".QuerySelector");
// console.log(QuerySelector);

// var divList = document.querySelector("div.list ul li:nth-child(3)");
// console.log(divList);

// // Get value

// var someText = document.querySelector(".someText").innerHTML;
// var someTextDiv = document.querySelector(".someText");
// console.log(someText);
// console.log(someTextDiv);
// someTextDiv.innerHTML = '<h2 style="color: blue">Hello world</h2>';

// //Attributes
var link = document.querySelector("a");
var linkText = document.querySelector("a").innerHTML;
console.log(linkText);
console.log(link);
console.log(link.getAttribute('href'));
console.log(link.getAttribute('class'));
console.log(link.attributes);

link.setAttribute('href', "https://i.ua");
link.innerHTML = "i.ua";

