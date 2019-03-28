// var testXHR = new XMLHttpRequest();
// console.log(testXHR);

function Request() {
  var xhr = new XMLHttpRequest();

  var url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
  xhr.open("GET", url, true);
  //xhr.setRequestHeader("Content-Type", "application/json");

  xhr.send();

  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;

    if (xhr.status != 200) {
      var errStatus = xhr.status;
      var errText = xhr.statusText;
      console.log(errStatus + ": " + errText);
    } else {
      var data = JSON.parse(xhr.responseText);
      ShowCurrency(data);
      //var data = xhr.responseText;
      //console.log(data);
    }
  };
}

function ShowCurrency(data) {
  for(var i = 0; i < data.length; i++){
    console.log(` ${data[i].ccy} / ${data[i].base_ccy} Buy ${data[i].buy} Sell ${data[i].sale} `);
  } 
}
