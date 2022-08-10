// Fonction Events SHOW MODAL WITH BUTTON
function showModal() {
  modalBg.style.display = "block";
}

modalBtns.forEach(function (btn) {
  btn.addEventListener("click", showModal);
});

// SUBMITTING THE FORMULAR
function submitFormular(e) {
if(emptyFieldInput, true)
{alert("fais ça bien !")

}

  e.preventDefault();
  closeModal();
  thanksForResa.style.display = "block";
}

formEvenenment.addEventListener("submit", submitFormular);

// CLOSING modalBg
closeBtn.addEventListener("click", closeModal);

function closeModal(e) {
  modalBg.style.display = "none";
}

// FUNCTION CLOSING THANKS MESSAGE
function hideThanksMessage() {
  thanksForResa.style.display = "none";
}
thanksForResa.addEventListener("click", hideThanksMessage);

/*  Pour que submitFormular soit possible
 il faut que tout mes champs soit valide :
 le champ firstName dont la valeur est "" dispose de deux caractères string minimum
  pour être valide et soumis à la validation du formulaire*/






function emptyFieldInput() {
  inputName.value == "";
  missingFirstname.textContent = "Veuillez remplir le champ !";
  missingFirstname.style.color = "red";
  missingFirstname.style.fontSize = "13px";
}
emptyFieldInput();
