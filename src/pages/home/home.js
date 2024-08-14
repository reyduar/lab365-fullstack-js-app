const semana3Button = document.querySelector("#semana3-button");
const semana4Button = document.querySelector("#semana4-button");
const semana5Button = document.querySelector("#semana5-button");

const home = document.querySelector("#homeContent");
const semana3Content = document.querySelector("#semana3Content");
const semana4Content = document.querySelector("#semana4Content");
const semana5Content = document.querySelector("#semana5Content");

semana3Button.addEventListener("click", () => {
  home.style.display = "block";
  semana4Content.style.display = "none";
  semana5Content.style.display = "none";
  semana3Content.style.display = "none";
});

semana4Button.addEventListener("click", () => {
  home.style.display = "none";
  semana3Content.style.display = "none";
  semana5Content.style.display = "none";
  semana4Content.style.display = "block";
});

semana5Button.addEventListener("click", () => {
  home.style.display = "none";
  semana3Content.style.display = "none";
  semana4Content.style.display = "none";
  semana5Content.style.display = "block";
});
