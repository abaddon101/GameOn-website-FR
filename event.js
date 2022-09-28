// Fonction Events SHOW MODAL WITH BUTTON
function showModal() {
  modalBg.style.display = "block";
}
modalBtns.forEach(function (btn) {
  btn.addEventListener("click", showModal);
});

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

// Submitting the formular
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
console.log(formEvenenment.last);
console.log(formEvenenment.email);
console.log(radios);
console.log(formEvenenment.location);

// Function error'message
/* Sends the error's message if the field is empty/don't respect the conditions
 and let it go if my fields respect the conditions*/
function errorMessage() {
  errorMessageFirstName();
  errorMessageLastName();
  errorMessageEmail();
  errorMessageBirthDate();
  errorMessageQuantity();
  errorMessageLocation();
  errorMessageCgu();
}

/*Conditions of the functions in the errorMessage Function */
// firstName
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
// lastName
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

// email
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

// birthDate
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

// quantity
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

// Validation of radios button
/* We Need to create a variable validRadio, his value will be the function validLocation
Then, We create a boucle for radios'buttons for check if they have been really checked.
For that,
With a "for" with a variable,
 The conventions says to give as name is "i" and his value will be initialize at zero.
 "let i = 0"
 Then,
 The value of  "i" will be inferior to the nomber of other options, so : not checked !
 For each option, we proceed to a test for know if the option is checked or no
 Then we go to the next option in  by incrementing the variable "i" for each iteration.
 Then, the "if" will check the [i] whish is the property of radio,
 And we finish with a console.log for the test of the variable validRadio.
*/

// ===> Deleted because useless for the test of the location : if a city is checked <== //
// function checkIf() {
//   if (!formEvenenment.first.value.lenght <= 2) {
//     sendMissingFirstName.style.display = "flex";
//     return false;
//   }
// }
// ===> Deleted because useless for the test of the location : if a city is checked <== //

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

// location
function errorMessageLocation() {
  if (validRadio() == false) {
    sendMissingLocation.style.display = "flex";
    return false;
  } else {
    sendMissingLocation.style.display = "none";
    return true;
  }
}

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

// Cgu
function errorMessageCgu() {
  if (validCgu() == false) {
    sendMissingCgu.style.display = "flex";
    return false;
  } else {
    sendMissingCgu.style.display = "none";
    return true;
  }
}

// ===> Deleted because it was locking the execution of the code and his tests <== //
/*validRadio.addEventListener("change", function () {
  validQuantity(this);
  validRadio;
});
*/
// ===> Deleted because it was locking the execution of the code and his tests <== //

// ===> Deleted because useless for the test of the location : if a city is checked <== //
// let getValue = document.querySelector("input[name='location']:checked");
//
// function getTheValue() {
//   if (getValue != null) {
//     console.log("Une ville à été selectionné, merci");
//   } else {
//     console.log("recommencez");
//     return false;
//   }
// }
// ===> Deleted because useless for the test of the location : if a city is checked <== //

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
