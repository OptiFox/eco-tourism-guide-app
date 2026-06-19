// jQuery
// $(".toggle-mode").click(() => {
//   $("body").toggleClass("dark");
// });

// vanila js as I want to fulfill assignment requirement
const btnToggleMode = document.querySelector(".toggle-mode");
const body = document.body;

btnToggleMode.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    btnToggleMode.textContent = "Light Mode";
  } else {
    btnToggleMode.textContent = "Dark Mode";
  }
})