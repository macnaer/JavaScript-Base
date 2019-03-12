/*function GetData() {

var url = "test.json";
console.log(url);
return url;
}

//===================

var SaveData = function(){
    var url = "blog.json";
    console.log(url);
}

SaveData();
//=========================

var func = GetData();
console.log(func);*/

//==============

function GetData() {
  var name = document.querySelector(".name").value;
  var surname = document.querySelector(".surname").value;
  var amount = parseInt(document.querySelector(".amount").value);
  var period = parseInt(document.querySelector(".period").value);
  var id = parseInt(document.querySelector(".id").value);
  Validate(name, surname, amount, period, id);
}

function Validate(name, surname, amount, period, id) {
  console.log("name = ", name);
  console.log("surname = ", surname);
  console.log("amount = ", amount);
  console.log("period = ", period);
  console.log("id = ", id);
  console.log("id length = ", typeof(id));

  if (name.length < 3 || name.length > 16) {
    var error = document.querySelector(".error");
    error.innerHTML = "Incorrect input name.";
  } else if (surname.length < 3 || surname.length > 16) {
    var error = document.querySelector(".error");
    error.innerHTML = "Incorrect input surname.";
  } else if (amount > 50000) {
    var error = document.querySelector(".error");
    error.innerHTML = "To match.";
  } else if (period > 24 || period < 6) {
    var error = document.querySelector(".error");
    error.innerHTML = "To Few!.";
  } //else if (id.length != 10) {
  //   var error = document.querySelector(".error");
  //   error.innerHTML = "Incorrect ID.";
  // }
   else {
    console.log("Success!");
    var name = name;
  }
}
