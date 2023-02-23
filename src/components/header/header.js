const navHome = document.querySelector("#home");
const navSemana3 = document.querySelector("#semana3");
const navSemana4 = document.querySelector("#semana4");

const home = document.querySelector("#homeContent");
const semana3Content = document.querySelector("#semana3Content");
const semana4Content = document.querySelector("#semana4Content");
home.style.display = "none";
semana3Content.style.display = "none";
semana4Content.style.display = "block";

// JS Events
navHome.addEventListener("click", () => {
  home.style.display = "block";
  semana3Content.style.display = "none";
  semana4Content.style.display = "none";
});
navSemana3.addEventListener("click", () => {
  home.style.display = "none";
  semana4Content.style.display = "none";
  semana3Content.style.display = "block";
});
navSemana4.addEventListener("click", () => {
  home.style.display = "none";
  semana3Content.style.display = "none";
  semana4Content.style.display = "block";
});
