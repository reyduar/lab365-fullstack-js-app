import { getDevProfile } from "../../../apis";

const avatarElement = document.querySelector("#avatar");
const companyElement = document.querySelector("#company");
const bioElment = document.querySelector("#bio");
const link1 = document.querySelector("#link1");
const link2 = document.querySelector("#link2");
const link3 = document.querySelector("#link3");
const madeBy = document.querySelector("#madeBy");
const profile = document.querySelector("#profile");
const errorElement = document.querySelector("#error");
const errorText = document.querySelector("#errorText");
const copyr = document.querySelector("#copyr");
errorElement.style.display = "none";
profile.style.display = "block";

const getGithubDevProfile = async () => {
  const [data, error] = await getDevProfile();
  if (error) {
    profile.style.display = "none";
    copyr.style.display = "none";
    errorElement.style.display = "block";
    errorText.innerText = error.message;
  } else {
    const {
      avatar_url,
      name,
      bio,
      blog,
      company,
      followers,
      following,
      html_url,
      location,
      twitter_username,
    } = data;
    avatarElement.src = avatar_url;
    companyElement.innerText = name;
    bioElment.innerText = bio;
    madeBy.innerText = name;
    madeBy.href = html_url;
    link1.href = blog;
    link2.href = html_url;
    link3.href = `https://twitter.com/${twitter_username}`;
  }
};

getGithubDevProfile();
