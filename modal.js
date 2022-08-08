// DOM ELEMENTS
/*************************************************************************/
// SELECTION THE .bground
let modalBg = document.querySelector(".bground");
// SELECTION THE .bground END
/***********************************************************/

// SELECTION THE .modal-btn
let modalBtns = document.querySelectorAll(".modal-btn");
// SELECTION THE .modal-btn END
/*************************************************************************/

// SELECTION THE .formData
let formData = document.querySelectorAll(".formData");
// SELECTION THE .formData END
/*************************************************************************/

// SELECTION THE .bground2
let thanksForResa = document.querySelector(".bground2");
// SELECTION THE .bground2 END
/*************************************************************************/

// SELECTION THE form
let formEvenenment = document.querySelector("form");
// SELECTION THE form END
/*************************************************************************/

// SELECTING THE SUBMIT BTN IN THE FORMULAR
let selectedFormBtn = document.querySelector(".btn-submit");
// SELECTING THE SUBMIT BTN IN THE FORMULAR END
/*************************************************************************/

// CLOSING X
let closeBtn = document.querySelector(".close");
// CLOSING X END
/*************************************************************************/

// CLOSING THANKS MESSAGE
let closeThanksMsg = document.querySelector(".close2");
// CLOSING THANKS MESSAGE END
/*************************************************************************/
// DOM ELEMENTS END

//***********************************************************************

// Fonction Events SHOW MODAL WITH BUTTON

// function showModal
function showModal() {
  modalBg.style.display = "block";
}
// function showModal End

// FUNCTION FOR EACH BUTON
modalBtns.forEach(function (btn) {
  console.log(btn);
  btn.addEventListener("click", showModal);
});
// FUNCTION FOR EACH BUTON END

// Fonction Events SHOW MODAL WITH BUTTON END

//***********************************************************************

// SUBMITTING THE FORMULAR
formEvenenment.addEventListener("submit", submitFormular);

function submitFormular(e) {
  e.preventDefault(); // (Working like the return false)
  //close modal
  closeModal();
  //close modal End

  // thanks message
  thanksForResa.style.display = "block";
  // thanks message End
}
// SUBMITTING THE FORMULAR END

// CLOSING modalBg
closeBtn.addEventListener("click", closeModal);
// CLOSING modalBg END

// FUNCTION CLOSING MODAL
function closeModal(e) {
  console.log(e);
  modalBg.style.display = "none";
}
// FUNCTION CLOSING MODAL END


// FUNCTION CLOSING THANKS MESSAGE
/* When we click on the window or in the X, this window with close it*/
function hideThanksMessage(){
  thanksForResa.style.display="none";
};

thanksForResa.addEventListener("click", hideThanksMessage);
// FUNCTION CLOSING THANKS MESSAGE END







// FUNCTION CLOSING THANKS MESSAGE END

//***********************************************************************

//***********************************************************************
