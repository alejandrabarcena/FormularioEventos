document.querySelector("#eventForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const cardNumber = document.getElementById("cardNumber");
  const expiry = document.getElementById("expiry");
  const cvc = document.getElementById("cvc");
  const errorMessage = document.getElementById("errorMessage");

  let isValid = true;
  let messages = [];

  // Reset estilos previos
  [name, email, cardNumber, expiry, cvc].forEach(input => input.classList.remove("error"));
  errorMessage.innerHTML = "";

  if (name.value.trim() === "") {
    isValid = false;
    name.classList.add("error");
    messages.push("Nombre obligatorio.");
  }

  if (!email.value.includes("@")) {
    isValid = false;
    email.classList.add("error");
    messages.push("Email no válido.");
  }

  if (cardNumber.value.length !== 16 || isNaN(cardNumber.value)) {
    isValid = false;
    cardNumber.classList.add("error");
    messages.push("Número de tarjeta debe tener 16 dígitos.");
  }

  if (!expiry.value) {
    isValid = false;
    expiry.classList.add("error");
    messages.push("Fecha de expiración requerida.");
  }

  if (cvc.value.length !== 3 || isNaN(cvc.value)) {
    isValid = false;
    cvc.classList.add("error");
    messages.push("CVC debe tener 3 dígitos numéricos.");
  }

  if (!isValid) {
    errorMessage.innerHTML = messages.join("<br>");
  } else {
    alert("Formulario enviado correctamente ✅");
    e.target.reset();
  }
});
