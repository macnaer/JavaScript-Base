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

var ClientDB = [];

function GetData() {
  var name = document.querySelector(".name").value;
  var surname = document.querySelector(".surname").value;
  var amount = parseInt(document.querySelector(".amount").value);
  var period = parseInt(document.querySelector(".period").value);
  var id = parseInt(document.querySelector(".id").value);
  var ShowPersonInfo = Validate();
  ShowPersonInfo(name, surname, amount, period, id);
}

function Validate() {

  var rate = 12;

  return function (name, surname, amount, period, id) {

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
      var newClinet = new SaveData(name, surname, amount, period, rate);
      ClientDB.push(newClinet);
    }
  };
 
}


function SaveData(name, surname, amount, period, rate) {
  this.name = name;
  this.surname = surname;
  this.amount = amount;
  this.period = period;
  this.rate = rate;
}


function ShowPersonInfo (){
  ClientDB.forEach(function(item, key){
    console.log(item, " ", key);
  })
  console.log("ClinetDB length", ClientDB.length);
  console.log("==============================>>>>>");
  console.log("New Client Added");
}






