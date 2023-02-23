const semana3Button = document.querySelector("#semana3-button");
const semana4Button = document.querySelector("#semana4-button");

const home = document.querySelector("#homeContent");
const semana3Content = document.querySelector("#semana3Content");
const semana4Content = document.querySelector("#semana4Content");

semana3Button.addEventListener("click", () => {
  home.style.display = "none";
  semana4Content.style.display = "none";
  semana3Content.style.display = "block";
});

semana4Button.addEventListener("click", () => {
  home.style.display = "none";
  semana3Content.style.display = "none";
  semana4Content.style.display = "block";
});
