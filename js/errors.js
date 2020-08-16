export function showError(elementId, message) {
  document.getElementById(elementId).innerHTML = message;
}

export function clearErrors() {
  Array.from(document.querySelectorAll(".error")).forEach((error) => {
    error.innerHTML = "";
  });
}
