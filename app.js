document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("payment-form");
  const alertBox = document.getElementById("alert");
  const cancelBtn = document.getElementById("cancel");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const card = document.getElementById("card").value.trim();
    const cvc = document.getElementById("cvc").value.trim();
    const amount = document.getElementById("amount").value.trim();
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value;
    const zip = document.getElementById("zip").value.trim();

    if (
      !card ||
      !cvc ||
      !amount ||
      !fname ||
      !lname ||
      !city ||
      !state ||
      !zip
    ) {
      showAlert("Please fill out all required fields.", "error");
      return;
    }

    if (card.length < 13 || card.length > 16) {
      showAlert("Invalid card number.", "error");
      return;
    }

    if (cvc.length < 3 || cvc.length > 4) {
      showAlert("Invalid CVC code.", "error");
      return;
    }

    if (isNaN(amount.replace(/[^0-9.-]+/g, ""))) {
      showAlert("Amount must be a number.", "error");
      return;
    }

    showAlert("✅ Registro completado correctamente.", "success");
    form.reset();
  });

  cancelBtn.addEventListener("click", () => {
    form.reset();
    alertBox.innerHTML = "";
  });

  function showAlert(message, type) {
    alertBox.innerHTML = `<p class="${type}">${message}</p>`;
    setTimeout(() => {
      alertBox.innerHTML = "";
    }, 4000);
  }
});
