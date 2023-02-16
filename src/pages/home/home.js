const semana3Button = document.querySelector("#semana3-button");

const home = document.querySelector("#homeContent");
const semana3Content = document.querySelector("#semana3Content");

semana3Button.addEventListener("click", () => {
  home.style.display = "none";
  semana3Content.style.display = "block";
});
