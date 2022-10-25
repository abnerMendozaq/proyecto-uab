var user = "Invitado";
var username = "admin";
var password = "admin";
var userp = document.getElementById("username");
var uls = sessionStorage.getItem("sesion");
if (uls) {
  userp.innerHTML = uls;
  document.getElementById("my-form")?.remove();
} else {
  userp.innerHTML = user;
}

function login() {
  let form = document.getElementById("my-form");
  let userInput = document.getElementById("user").value;
  if (userInput == username) {
    userp.innerHTML = username;
    sessionStorage.setItem("sesion", username);
    form.ariaDisabled();
  } else {
    alert("Error al iniciar sesion");
  }
  console.log(userInput);
}
function logout() {
  sessionStorage.removeItem("sesion");
  userp.innerHTML = user;
}
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

btn1.addEventListener("click", function () {
  let bs = document.getElementById("bs").value;
  let dol = document.getElementById("dol");
  dol.value = Math.round((bs / 6.98) * 100) / 100;
});
btn2.addEventListener("click", function () {
  let bs = document.getElementById("bs");
  let dol = document.getElementById("dol").value;
  bs.value = Math.round((dol / 0.14) * 100) / 100;
});
