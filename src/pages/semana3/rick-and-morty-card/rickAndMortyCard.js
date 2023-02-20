import { getRickAndMortyCharacterById } from "../../../apis";

let characterId = 1;
const rymCard = document.querySelector("#rymCard");
const characterImage = document.querySelector("#characterImage");
const characterName = document.querySelector("#characterName");
const statusCharacter = document.querySelector("#statusCharacter");
const characterSpecie = document.querySelector("#characterSpecie");
const characterOrigen = document.querySelector("#characterOrigen");
const characterLocation = document.querySelector("#characterLocation");
const prevButton = document.querySelector("#prevButton");
const goNextButton = document.querySelector("#goNextButton");

const getRickAndMortyCharacter = async (id) => {
  const [data, error] = await getRickAndMortyCharacterById(id);
  if (error) {
    errorCard.style.display = "block";
    rymCard.style.display = "none";
    errorCard.innerText = error.message;
  } else {
    errorCard.style.display = "none";
    rymCard.style.display = "block";
    errorCard.innerText = "";
    const { image, name, gender, origin, location, species, status } = data;
    characterName.innerText = name;
    statusCharacter.innerHTML = status === "Alive" ? ` 🌷 ` : ` 💀 `;
    characterImage.src = image;
    characterSpecie.innerText = `${species} | ${gender}`;
    characterOrigen.innerText = origin?.name || "-";
    characterLocation.innerText = location?.name || "-";
  }
};

const goPrevious = () => {
  let prev = parseInt(characterId);
  if (prev === 1) {
    prev = 1;
  } else {
    prev = prev - 1;
    characterId = prev;
    getRickAndMortyCharacter(characterId);
  }
};

const goNext = () => {
  let next = parseInt(characterId);
  if (next === 800) {
    next = 800;
  } else {
    next = next + 1;
    characterId = next;
    getRickAndMortyCharacter(characterId);
  }
};

getRickAndMortyCharacter(characterId);

prevButton.addEventListener("click", goPrevious);
goNextButton.addEventListener("click", goNext);
