// SELECTION THE .bground
let modalBg = document.querySelector(".bground");
// SELECTION THE .modal-btn
let modalBtns = document.querySelectorAll(".modal-btn");
// SELECTION THE .formData
let formData = document.querySelectorAll(".formData");
// SELECTION THE .bground2
let thanksForResa = document.querySelector(".bground2");
// SELECTION THE form
let formEvenenment = document.querySelector("#formular");
// SELECTING THE SUBMIT BTN IN THE FORMULAR
let selectedFormBtn = document.querySelector(".btn-submit");
// CLOSING X
let closeBtn = document.querySelector(".close");
// CLOSING THANKS MESSAGE
let closeThanksMsg = document.querySelector(".close2");
// SEND ERROR MESSAGE
let sendErrorMessage = document.querySelector("#missingFirstname");
// selection of the formular elements
let first = document.querySelector("#first");
let last = document.querySelector("#last");
let email = document.querySelector("#email");
let birthdate = document.querySelector("#birthdate");
let quantity = document.querySelector("#quantity");
let radios = document.querySelectorAll("input[name='location']");


console.log(radios);
console.log(formEvenenment.location);

//fonction for validation of the radio buttons

// creation of a nodelist with the variable
// --- let radios = document.querySelectorAll("input[name='location']");---

/*let checkTheRadio = function () {
  radios;
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      let testRadio = checkTheRadio.test(radios[i].checked);
      console.log(testRadio);
      return true;
    }
    return false;
  }
};
*/
