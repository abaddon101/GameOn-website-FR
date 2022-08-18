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
    (formEvenenment.first.value.lenght <= 2 ||
      validLastName(formEvenenment.last) == false) ||
    formEvenenment.email.value == "")
   {
    errorMessage();
    alert("Merci de tout remplir");
    e.preventDefault();
  } else {
    /*else if(testFirstName.value == false){
    
    alert("WOOOOOOOOOOW");
    e.preventDefault();

  }*/
    modalBg.style.display = "none";
    thanksForResa.style.display = "block";
    e.preventDefault();
  }
}

console.log(submitFormular);
console.log(formEvenenment.last);
console.log(formEvenenment.email);

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
