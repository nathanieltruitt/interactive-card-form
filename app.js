// Grab elements from the DOM
const inputList = document.querySelectorAll("input");

// functions
function addInvalidMessage(event) {
  // update or create error message
  if (event.target.dataset.errorcreated) {
    // grab error message if already created
    const invalidMessage = document.querySelector(`#${event.target.id}-error`);
    invalidMessage.innerText = event.target.validationMessage;
  } else {
    // if not created, new p tag with error id
    const invalidMessage = document.createElement("p");
    invalidMessage.id = `${event.target.id}-error`;
    invalidMessage.className = "invalid-message";
    event.target.setAttribute("data-errorcreated", "true");
    invalidMessage.innerText = event.target.validationMessage;

    if (event.target.id === "month" || event.target.id === "year") {
      event.target.parentNode.parentNode.appendChild(invalidMessage);
    } else {
      event.target.parentNode.appendChild(invalidMessage);
    }
  }
}

inputList.forEach((input) => {
  input.addEventListener("invalid", addInvalidMessage);
});
