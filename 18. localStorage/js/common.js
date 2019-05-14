const adminLogin = "admin";
const adminPass = "adminpass";
window.addEventListener("load", CheckRole);
let btn = document.querySelector(".btn");
btn.addEventListener("click", GetInputData);

 document.querySelector(".load").addEventListener("click", GetData);

function GetInputData() {
  let name = document.querySelector("input").value;
  let pass = document.querySelector('.password').value;

  if (adminLogin === name && adminPass === pass){
    localStorage.setItem("username", name);
    localStorage.setItem('role', "admin");
    CheckRole();
    let error = document.querySelector(".error");
    error.remove();
  }
  else{
    let login = document.querySelector("#login");
    let error = document.createElement("div");
    login.appendChild(error);
    login.className = "error";
    error.innerHTML = "Incorrect login or password";
  }
}


function GetData(){
  let username = localStorage.getItem("username");
  let password = localStorage.getItem("password");

  console.log(`From localStorage: Username = ${username} Password = ${password}`)
}


function CheckRole(){
  var role = localStorage.getItem("role");
  console.log("role = " , role);
  if (role === "admin"){
    DeleteForm();
    AdminMessage();
  }
}

function AdminMessage(){
  let msg = document.querySelector("#login");
  let elem = document.createElement("div");
  let username = localStorage.getItem("username");
  elem.className = "msg";
  elem.style.backgroundColor = "green";
  elem.style.color = "white";
  elem.innerHTML = `Welcome ${username}`;
  msg.appendChild(elem);
}

function DeleteForm(){
  let loginForm = document.querySelector('.loginForm');
  loginForm.remove();
  SignOut();
}

function SignOut(){
  let forms = document.querySelector(".forms");
  let signOut = document.createElement('button');
  signOut.className = "col btn btn-primary";
  signOut.style.width = "100px";
  signOut.style.height = "30px";
  signOut.innerHTML = "Sign Out";

  forms.appendChild(signOut);
  signOut.addEventListener('click', ClearSotrage);
}

function ClearSotrage(){
  localStorage.removeItem("username");
  localStorage.removeItem("role");
  CheckRole();
}