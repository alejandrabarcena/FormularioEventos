document.querySelector("#eventForm").addEventListener("submit", function (e) {
  e.preventDefault(); // 👈 Detiene el envío del formulario

  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const date = document.querySelector("#date");
  const errorBox = document.querySelector("#error-message");

  let valid = true;
  let messages = [];

  // Limpiar errores anteriores
  [name, email, date].forEach(input => input.classList.remove("invalid"));
  errorBox.textContent = "";

  if (name.value.trim() === "") {
    messages.push("El nombre es obligatorio.");
    name.classList.add("invalid");
    valid = false;
  }

  if (!email.value.includes("@")) {
    messages.push("El correo debe ser válido.");
    email.classList.add("invalid");
    valid = false;
  }

  if (!date.value) {
    messages.push("Debes seleccionar una fecha.");
    date.classList.add("invalid");
    valid = false;
  }

  if (!valid) {
    errorBox.textContent = messages.join(" ");
  } else {
    alert("¡Formulario enviado con éxito!");
    e.target.reset();
  }
});
