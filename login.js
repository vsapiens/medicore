function validateForm() {
  let form = document.getElementById("login-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  let username = document.getElementById("username");
  let password = document.getElementById("password");
  if (username.value === "") {
    alert("Proporcionar el nombre del usuario");
    return false;
  }
  if (password.value === "") {
    alert("Password incorrecto");
    return false;
  }
  if (username.value[0] !== "M") {
    window.open("farmaciaHome.html");
  } else {
    window.open("doctorHome.html");
  }
}

function watchForm() {
  let form = document.getElementById("login-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    validateForm();
  });
}

function init() {
  watchForm();
}

init();
