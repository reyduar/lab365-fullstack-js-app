import { showNotification } from "../../../utils";
let timer = null;
let birthday = null;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const inputDate = document.getElementById("inputDate");
const alarmButton = document.getElementById("alarmButton");
const alarmReminder = document.getElementById("alarmReminder");

const activateAlarm = () => {
  if (inputDate.value) {
    birthday = new Date(inputDate.value);
    timer = setInterval(alarm, second);
  } else {
    showNotification("alarmNotification", "Data é obrigatório.");
  }
};

const showReminder = (notification) => {
  alarmReminder.innerHTML = `<h4 class="blue-text">${notification}</h4>`;
};

function alarm() {
  const currentDate = new Date();
  const msReminder = birthday - currentDate;
  if (msReminder <= -day) {
    showReminder("Seu aniversário já passou! 😞");
    clearInterval(timer);
    return;
  }
  if (msReminder <= 0) {
    showReminder("Feliz aniversário!! 🎁");
    clearInterval(timer);
    return;
  }
  const daysReminder = Math.floor(msReminder / day);
  const hours = Math.floor((msReminder % day) / hour);
  const minutes = Math.floor((msReminder % hour) / minute);
  const seconds = Math.floor((msReminder % minute) / second);
  showReminder(
    `Faltam ${daysReminder} dias para o seu aniversário ⌛${hours}:${minutes}:${seconds}`
  );
}

alarmButton.addEventListener("click", activateAlarm);
