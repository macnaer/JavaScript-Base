let btn = document.querySelector("#load");
btn.addEventListener("click", Request);

async function Request() {
  let url = "https://jsonplaceholder.typicode.com/users";

  var response = await fetch(url);
  var data = await response.json();
  console.log(data)
 
  var list = document.querySelector(".list");
  var counter = 0;
  var elem = data.map(item => {
  counter++;
  localStorage.setItem("User" + counter, item.id + " " + item.name + " " + item.email);
  return "<li>" + item.id + " " + item.name + " " + item.email + "</li>";
  });
  list.insertAdjacentHTML("afterbegin", elem.join(" "));
}
