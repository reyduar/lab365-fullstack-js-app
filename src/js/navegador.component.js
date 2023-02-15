const navHome = document.querySelector("#home");
const navLogin = document.querySelector("#login");

const home = document.querySelector("#homeContent");
const login = document.querySelector("#loginContent");
login.style.display = "none";

// JS Events
navHome.addEventListener("click", () => {
  home.style.display = "block";
  login.style.display = "none";
});
navLogin.addEventListener("click", () => {
  home.style.display = "none";
  login.style.display = "block";
});
