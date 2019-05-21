let btn = document.querySelector("#load");
btn.addEventListener("click", Request);

function Request() {
  let url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then(response => {
      console.log("Response: ", response);
      btn.setAttribute("disabled", true);
      return response.json();
    })
    .then(data => {
      console.log("Data: ", data);
      var list = document.querySelector(".list");
      var counter = 0;
      var elem = data.map(item => {
        counter++;
        localStorage.setItem("User" + counter, item.id + " " + item.name + " " + item.email
    );
        return "<li>" + item.id + " " + item.name + " " + item.email + "</li>";
      });
      list.insertAdjacentHTML("afterbegin", elem.join(" "));
    });
}
