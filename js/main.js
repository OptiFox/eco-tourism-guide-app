// Theme toggle

// jQuery
// $(".toggle-mode").click(() => {
//   $("body").toggleClass("dark");
// });

// vanila js as I want to fulfill assignment requirement
const btnToggleMode = document.querySelector(".toggle-mode");
const body = document.body;

// make sure browser remember your chosen theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") body.classList.add("dark");

btnToggleMode.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) localStorage.setItem("theme", "dark");
  else localStorage.setItem("theme", "light");
});

// Form validation
const bookingForm = document.getElementById("booking-form");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const destError = document.getElementById("destError");
const radioError = document.getElementById("radioError");
const successMessage = document.getElementById("successMessage");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    // Prevent the page from refreshing immediately
    e.preventDefault();

    // reset all error messages
    nameError.textContent = "";
    emailError.textContent = "";
    destError.textContent = "";
    radioError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    // name validation
    const nameInput = document.getElementById("fullName").value.trim();
    if (nameInput === "") {
      nameError.textContent = "Please enter your full name.";
      isValid = false;
    }

    // email validation
    const emailInput = document.getElementById("emailAddr").value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (emailInput === "") {
      emailError.textContent = "Email address cannot be empty.";
      isValid = false;
    } else if (!emailInput.match(emailPattern)) {
      emailError.textContent = "Please enter a valid email format.";
      isValid = false;
    }

    // destination dropdown validation
    const destInput = document.getElementById("destination").value;
    if (destInput === "") {
      destError.textContent = "Please select a destination.";
      isValid = false;
    }

    // experience validation
    const radioChecked = document.querySelector(
      'input[name="experience"]:checked',
    );
    if (!radioChecked) {
      radioError.textContent = "Please select your experience level.";
      isValid = false;
    }

    // success
    if (isValid) {
      successMessage.textContent =
        "Booking request submitted successfully! We will contact you soon.";
      bookingForm.reset();
    }
  });
}
