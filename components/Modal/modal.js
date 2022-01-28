let modalButton = document.getElementById("modal-button");
let modalCloseIcon = document.getElementById("modal-close-icon");
let modalCancelButton = document.getElementById("modal-cancel-button");
let modalOkButton = document.getElementById("modal-ok-button");
let modalContainer = document.getElementById("modal-container");
const removeModal = () => modalContainer.setAttribute("style", "display: none");

//To Open the modal
modalButton.addEventListener("click", () => {
  modalContainer.setAttribute("style", "display: flex");
});

//To Close the modal
modalCloseIcon.addEventListener("click", () => {
  removeModal();
});

//To Close the modal
modalCancelButton.addEventListener("click", () => {
  removeModal();
});

//To Close the modal
modalOkButton.addEventListener("click", () => {
  removeModal();
});
