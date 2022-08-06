// DOM Elements

// selection the .bground
let modalBg = document.querySelector(".bground");

// selection the .modal-btn
let modalBtns = document.querySelectorAll(".modal-btn");

// selection the .formData
let formData = document.querySelectorAll(".formData");

// selection the .bground2
let thanksForResa = document.querySelector(".bground2");

// selection the form
let formEvenenment = document.querySelector("form");

// selecting the submit btn in the formular
let selectedFormBtn = document.querySelector(".btn-submit");

// closing X
let closeBtn = document.querySelector(".close");

// close thanks message
let closeThanksMsg = document.querySelector(".close2");

// DOM Elements End




//close thanks message










// function close modal
function closeModal(e) {
  console.log(e);
  modalBg.style.display = "none";
}

  // closemodalBg
  closeBtn.addEventListener("click", closeModal);
  // closemodalBg End

// function close modal End

// Submit the formular
formEvenenment.addEventListener("submit", submitFormular);

function submitFormular(e) {
  e.preventDefault(); // (Working like the return false)

  //close modal
  closeModal();

  // thanks message
  thanksForResa.style.display = "block";
}
// Submit the formular End


// Fonction Events

modalBtns.forEach(function (btn) {
  console.log(btn);
  btn.addEventListener("click", showModal);
});

// function showModal() {
function showModal() {
  modalBg.style.display = "block";
}
