var user = "Invitado";
var username = "admin";
var password = "admin";
var userp = document.getElementById("username");
var uls = sessionStorage.getItem("sesion");
if (uls) {
  userp.innerHTML = uls;
  document.getElementById("my-form")?.reset();
} else {
  userp.innerHTML = user;
}

function login() {
  let form = document.getElementById("my-form");
  let userInput = document.getElementById("user").value;
  // if (userInput == username) {
  userp.innerHTML = userInput;
  sessionStorage.setItem("sesion", username);
  form.reset();
  // } else {
  //   alert("Error al iniciar sesion");
  // }
  // console.log(userInput);
}
function logout() {
  sessionStorage.removeItem("sesion");
  userp.innerHTML = user;
}
var btn1 = document?.getElementById("btn1");

btn1?.addEventListener("click", function () {
  let tipo = document.getElementById("tipo").value;
  let bs = document.getElementById("bs");
  let dol = document.getElementById("dol");
  switch (tipo) {
    case "Bs":
      dol.value = 0;
      dol.value = Math.round((bs.value / 6.98) * 100) / 100;
      return;
    case "$":
      bs.value = 0;
      bs.value = Math.round((dol.value / 0.14) * 100) / 100;
      return;
  }
});
