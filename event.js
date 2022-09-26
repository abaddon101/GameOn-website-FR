console.log(formEvenenment.last);
console.log(formEvenenment.email);
console.log(radios);
console.log(formEvenenment.location);

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
    validFirstname(formEvenenment.first) == false ||
    validLastName(formEvenenment.last) == false ||
    formEvenenment.email.value == "" ||
    formEvenenment.birthdate.value == "" ||
    formEvenenment.quantity.value == "" ||
    validRadio() == false ||
    validCgu() == false
  ) {
    errorMessage();

    e.preventDefault();
  } else {
    modalBg.style.display = "none";
    thanksForResa.style.display = "block";
    e.preventDefault();
  }
}

/* if my input is empty then send message error,
 and if my input is full then cancel the error message
*/
// function checkIf() {
//   if (!formEvenenment.first.value.lenght <= 2) {
//     sendMissingFirstName.style.display = "flex";
//     return false;
//   }
// }

// Sends the error's message if the field is empty/don't respect the conditions and let it go if my fields respect the conditions
function errorMessage() {
  errorMessageFirstName();
  errorMessageLastName();
  errorMessageEmail();
  errorMessageBirthDate();
  errorMessageQuantity();
  errorMessageLocation();
  errorMessageCgu();

  // sendMissingQuantity.style.display = "flex";
  // sendMissingLocation.style.display = "flex";
  // sendMissingCgu.style.display = "flex";
}

function errorMessageFirstName() {
  let errorField = formEvenenment.first.dataset.errorField;
  console.log(errorField);
  errorFieldElement = document.querySelector(errorField);
  console.log(errorFieldElement);
  if (validFirstname(formEvenenment.first) == false) {
    console.log("flex");
    errorFieldElement.style.display = "flex";
    first.style.border = "2px solid red";
    return false;
  } else {
    console.log("felx2");
    first.style.border = "none";
    errorFieldElement.style.display = "none";
    return true;
  }
}

function errorMessageLastName() {
  if (validLastName(formEvenenment.last) == false) {
    sendMissingLastName.style.display = "flex";
    last.style.border = "2px solid red";
    return false;
  } else {
    sendMissingLastName.style.display = "none";
    last.style.border = "none";
    return true;
  }
}

function errorMessageEmail() {
  if (formEvenenment.email.value == "") {
    sendMissingEmail.style.display = "flex";
    email.style.border = "2px solid red";
    return false;
  } else {
    sendMissingEmail.style.display = "none";
    email.style.border = "none";
    return true;
  }
}

function errorMessageBirthDate() {
  if (formEvenenment.birthdate.value == "") {
    sendMissingBirthdate.style.display = "flex";
    birthdate.style.border = "2px solid red";
    return false;
  } else {
    sendMissingBirthdate.style.display = "none";
    birthdate.style.border = "none";
    return true;
  }
}

function errorMessageQuantity() {
  if (formEvenenment.quantity.value == "") {
    sendMissingQuantity.style.display = "flex";
    quantity.style.border = "2px solid red";
    return false;
  } else {
    sendMissingQuantity.style.display = "none";
    quantity.style.border = "none";
    return true;
  }
}

function errorMessageLocation() {
  if (validRadio() == false) {
    sendMissingLocation.style.display = "flex";
    return false;
  } else {
    sendMissingLocation.style.display = "none";
    return true;
  }
}

function errorMessageCgu() {
  if (validCgu() == false) {
    sendMissingCgu.style.display = "flex";
    return false;
  } else {
    sendMissingCgu.style.display = "none";
    return true;
  }
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

// Validation of radios button
/* Je veux que lorsqu'on selectionne un bouton radio,
 s'il est coché la propriété value va contenir sa valeur*/

let validRadio = function validLocation() {
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      console.log(true);
      return true;
    }
  }
  console.log(false);
  return false;
};

// ===> supprimé car bloquait l'execution du code et des tests //
/*validRadio.addEventListener("change", function () {
  validQuantity(this);
  validRadio;
});
*/
// ===> supprimé car bloquait l'execution du code et des tests //

let getValue = document.querySelector("input[name='location']:checked");

function getTheValue() {
  if (getValue != null) {
    console.log("Une ville à été selectionné, merci");
  } else {
    console.log("recommencez");
    return false;
  }
}

// Validation of the checkbox

/*let checked = document.querySelector("#checkbox1:checked");
console.log(checked);

function validCgu() {
  for (let i = 0; i < checkBoxCgu.length; i++)
  if (checkBoxCgu[i].checked) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};

*/

function validCgu() {
  // check if checkbox is checked

  if (!checkBoxCgu.checked) {
    console.log(false);
    return false;
  } else {
    console.log(true);
    return true;
  }
}
