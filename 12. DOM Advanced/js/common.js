// console.log(document.parentElement);
// console.log(document);
// console.log(document.querySelector("html"));
// console.log(document.querySelector("html").parentElement);


// console.log(document.parentElement);
// console.log(document);
// console.log(document.children);

var root = document.querySelector("#root");
console.log(root);

var divElement = document.createElement("div");
divElement.innerHTML = "New Element";
divElement.className = "new";
// divElement.setAttribute("href", "https://i.ua");
// divElement.removeAttribute('href');

divElement.setAttribute("style", "cursor: pointer; font-weight: bold");

console.log(divElement);

root.appendChild(divElement);

///////

var ul = document.createElement("ul");
ul.className = "list";

var li = document.createElement("li");

var a = document.createElement("a");
a.setAttribute("href", "https://ukr.net");
a.setAttribute("title", "ukr.net");
a.setAttribute("target", "_blank");
a.innerHTML = "ukr.net";

ul.appendChild(li);
li.appendChild(a);

root.appendChild(ul);
console.log(ul.parentElement.childNodes);
//ul.parentElement.firstElementChild.remove(); 
console.log(ul.parentElement.childElementCount);
ul.parentElement.removeChild(divElement);

console.log(ul.parentElement.hasChildNodes);