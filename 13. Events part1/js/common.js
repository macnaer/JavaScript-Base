var btn = document.querySelector(".btn");
var h1 = document.querySelector(".h1");

function ButtonHandler() {
  h1.textContent = "New Header";
}

btn.addEventListener("click", ButtonHandler);

h1.addEventListener("mouseenter", function() {
  console.log("Mouse enter");
  console.log(this);
  this.style.color = "red";
});

h1.addEventListener("mouseleave", function() {
  console.log("Mouse leave");
  this.style.color = "black";
});

var div1 = document.querySelector(".div1");
var div2 = document.querySelector(".div2");
var div3 = document.querySelector(".div3");

div1.addEventListener(
  "click",
  function() {
    event.stopPropagation();
    console.log("DIV 1");
    this.style.background = "green";
  },
  false    // false Bubbling (Default) true Capture
);

div2.addEventListener(
  "click",
  function() {
    event.stopPropagation();
    console.log("DIV 2");
    this.style.background = "green";
  },
  false
);

div3.addEventListener(
  "click",
  function() {
    event.stopPropagation();
    console.log("DIV 3");
    this.style.background = "green";
  },
  false
);


var input = document.querySelector(".input");
input.addEventListener('keypress', function(){
    if (event.keyCode < 65 || event.keyCode > 90){
        event.preventDefault();
    }
    console.log(event.keyCode);
});
