const form = document.getElementById("eventForm");
const inputs = form.querySelectorAll("input");
const successMsg = document.getElementById("successMsg");

const validations = {
  name: value => value.trim().length >= 3,
  email: value => /\S+@\S+\.\S+/.test(value),
  card: value => /^\d{16}$/.test(value),
  cvc: value => /^\d{3}$/.test(value),
  date: value => value !== ""
};

inputs.forEach(input => {
  input.addEventListener("input", () => {
    const isValid = validations[input.id](input.value);
    input.classList.toggle("valid", isValid);
    input.classList.toggle("invalid", !isValid);
  });
});

form.addEventListener("submit", e => {
  e.preventDefault();

  let isFormValid = true;

  inputs.forEach(input => {
    const isValid = validations[input.id](input.value);
    input.classList.toggle("valid", isValid);
    input.classList.toggle("invalid", !isValid);
    if (!isValid) isFormValid = false;
  });

  if (isFormValid) {
    successMsg.classList.remove("hidden");
    form.reset();
    inputs.forEach(input => {
      input.classList.remove("valid");
    });
  } else {
    successMsg.classList.add("hidden");
  }
});
