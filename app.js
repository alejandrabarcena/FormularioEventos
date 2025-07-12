document.getElementById("payment-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const inputs = document.querySelectorAll("input, select, textarea");
  let allFilled = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.style.backgroundColor = "#f8d7da";
      allFilled = false;
    } else {
      input.style.backgroundColor = "";
    }
  });

  const alertBox = document.getElementById("alert");

  if (!allFilled) {
    alertBox.style.display = "block";
    alertBox.innerText = "Some fields are missing";
  } else {
    alertBox.style.display = "none";
    alert("Formulario enviado exitosamente 🧾");
  }
});

document.getElementById("cancel").addEventListener("click", () => {
  document.getElementById("payment-form").reset();
  document.getElementById("alert").style.display = "none";
  document.querySelectorAll("input, select, textarea").forEach((el) => {
    el.style.backgroundColor = "";
  });
});
