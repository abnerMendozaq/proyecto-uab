var user = "Invitado";
var username = "admin";
var password = "admin";
let userp = document.getElementById("username");
userp.innerHTML = user;
function login() {
  let form = document.getElementById("my-form");
  let userInput = document.getElementById("user").value;
  if (userInput == username) {
    userp.innerHTML = username;
    form.remove();
  } else {
    alert("Error al iniciar sesion");
  }
  console.log(userInput);
}
