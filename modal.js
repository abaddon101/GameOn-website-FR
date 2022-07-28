function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function validate(){
  thanks ();
  hideModal();
  return false;
  
}

function thanks () {

  thanksForResa.style.display ="block";
}

// DOM Elements
const modalbg = document.querySelector(".bground"); // a garder
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const thanksForResa = document.querySelector(".bground2"); // a garder
const bla = document.querySelector("form");

bla.addEventListener("submit", validate )



// launch modal event
modalBtn.forEach ( function (btn) {
  console.log(btn);
  btn.addEventListener("click", launchModal)
} );

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// launch modal form hide
function hideModal() {
  modalbg.style.display = "none";
}

//lauch message  btn-submit

//launch message thanks for reservation


