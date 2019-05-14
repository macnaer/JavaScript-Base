let btn = document.querySelector(".btn");
btn.addEventListener("click", GetInputData);

function GetInputData() {
  let name = document.querySelector("input").value;
  let pass = document.querySelector('.password').value;
  console.log(name);
  console.log(pass);
  localStorage.setItem("username", name);
  localStorage.setItem('password', pass);
}
