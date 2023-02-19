const inputPhone = document.getElementById("inputPhone");
const inputMsg = document.getElementById("inputMsg");
const sendButton = document.getElementById("sendButton");
const resetButton = document.getElementById("resetButton");
let phone = "";
let message = "";

const handleInputPhoneChange = (e) => (phone = e.target.value);
const handleInputMsgChange = (e) => (message = e.target.value);

const showNotification = (message) => {
  const error = document.querySelector("#error");
  if (message) {
    error.innerHTML = `<p class="red-text text-darken-2">${message}</p>`;
    setTimeout(() => {
      showNotification("");
    }, 5000);
  } else {
    error.innerHTML = ``;
  }
};

const linkGenerator = () =>
  `http://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
    message
  )}`;

const handleSendLink = () => {
  if (phone && message) {
    const link = linkGenerator();
    window.open(link, "_blank");
  } else {
    showNotification("Insira os valores obrigatórios");
  }
};

const reset = () => {
  inputPhone.value = "";
  inputMsg.value = "";
  showNotification("");
  inputPhone.focus();
};

resetButton.addEventListener("click", reset);
inputPhone.addEventListener("change", handleInputPhoneChange);
inputMsg.addEventListener("change", handleInputMsgChange);
sendButton.addEventListener("click", handleSendLink);
