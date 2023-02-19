export function showNotification(elementId, notification) {
  const error = document.querySelector(`#${elementId}`);
  if (notification) {
    error.innerHTML = `<p class="red-text text-darken-2">${notification}</p>`;
    setTimeout(() => {
      showNotification(elementId, "");
    }, 5000);
  } else {
    error.innerHTML = ``;
  }
}
