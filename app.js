const form = document.getElementById("eventForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  const inputs = form.querySelectorAll("input");

  inputs.forEach((input) => {
    if (input.checkValidity()) {
      input.classList.remove("invalid");
      input.classList.add("valid");
    } else {
      input.classList.remove("valid");
      input.classList.add("invalid");
      valid = false;
    }
  });

  if (valid) {
    successMsg.style.display = "block";
    setTimeout(() => {
      successMsg.style.display = "none";
      form.reset();
      inputs.forEach((i) => i.classList.remove("valid"));
    }, 3000);
  }
});
