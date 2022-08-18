// Fonction Events SHOW MODAL WITH BUTTON
function showModal() {
  modalBg.style.display = "block";
}

modalBtns.forEach(function (btn) {
  btn.addEventListener("click", showModal);
});

// SUBMITTING THE FORMULAR
function submitFormular(e) {
if (formEvenenment.First.value <=2){ 
    errorMessage();
    alert("reveil")
    e.preventDefault();
  }
  else{

    modalBg.style.display = "none";
    thanksForResa.style.display = "block";
    e.preventDefault();
  }
  }

console.log(formEvenenment.First);
//empty field : ne doit aps être vide, dois respecté certains caractères.



function errorMessage() {
  sendErrorMessage.style.display = "flex";
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
