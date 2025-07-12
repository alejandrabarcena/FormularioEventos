
document.getElementById("payment-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const requiredFields = ["card", "cvc", "amount", "fname", "lname", "city", "state", "postal", "message"];
  let valid = true;

  requiredFields.forEach(id => {
    const field = document.getElementById(id);
    if (!field.value.trim()) {
      field.parentElement.classList.add("error");
      valid = false;
    } else {
      field.parentElement.classList.remove("error");
    }
  });

  if (valid) {
    alert("Payment submitted successfully!");
  } else {
    alert("Some fields are missing");
  }
});

document.getElementById("cancel").addEventListener("click", () => {
  document.getElementById("payment-form").reset();
});
