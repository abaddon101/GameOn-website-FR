// Fonction Events SHOW MODAL WITH BUTTON
function showModal() {
  modalBg.style.display = "block";
}
modalBtns.forEach(function (btn) {
  btn.addEventListener("click", showModal);
});
// SUBMITTING THE FORMULAR
function submitFormular(e) {
  if (
    (formEvenenment.first.value <= 2,
    formEvenenment.last.value <= 2,
    formEvenenment.email.value == "")
  ) {
    errorMessage();
    alert("Merci de tout remplir");
    e.preventDefault();
  } else {
    modalBg.style.display = "none";
    thanksForResa.style.display = "block";
    e.preventDefault();
  }
}

console.log(formEvenenment.Email);
// Sends the error's message
function errorMessage() {
  sendErrorMessage.style.display = "flex";
}
//Event submit the formular
formEvenenment.addEventListener("submit", submitFormular);
// Close the modalBg
function closeModal(e) {
  modalBg.style.display = "none";
}
closeBtn.addEventListener("click", closeModal);
// Close the thanks message
function hideThanksMessage() {
  thanksForResa.style.display = "none";
}
thanksForResa.addEventListener("click", hideThanksMessage);
