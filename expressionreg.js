//---------------------------------------------------------------------
/* Set up an event that will apply as the first name field will be changed
thanks to the change parameter and thanks to a function that will select this variable "validFirst"*/
formEvenenment.first.addEventListener("change", function () {
  validFirstname(this);
});
/* The variable or constant validFirst will have a function
whose parameter will be the first variable*/
const validFirstname = function (first) {
  // creation reg exp for validation of the first
  let firstRegExp = new RegExp("^[a-zA-Z]{2,}$", "i");
  /*Implemented the test of the first variable whose value
          will = to the variable firstRegExp (and whose parameter
          will be the value of the variable first)
          thanks to a.log console*/
  let testFirstName = firstRegExp.test(first.value);
  console.log(testFirstName);
  return testFirstName;
};
//---------------------------------------------------------------------
/* Set up of an event that will apply when the first name field is modified
         thanks to the change parameter and a function that selects this variable "validFirst"*/
formEvenenment.last.addEventListener("change", function () {
  validLastName(this);
});
/* The variable or constant validFirst will have a function
             whose parameter will be the last variable*/
const validLastName = function (last) {
  // creation reg exp for validation of the last
  let lastRegExp = new RegExp("^[a-zA-Z]{2,}$", "i");
  /*Implemented the last variable test whose value
            will = to the variable lastRegExp (and whose parameter
            will be the value of the last variable)
            thanks to a.log console*/
  let testLastName = lastRegExp.test(last.value);
  console.log(testLastName);
  return testLastName;
};
//---------------------------------------------------------------------
/* Set up of an event that will apply when the email field is modified
   thanks to the change parameter and a function that selects this variable "validEmail"*/
formEvenenment.email.addEventListener("change", function () {
  validEmail(this);
});
/* The variable or constant validEmail will have a function
     whose parameter will be the email variable*/
const validEmail = function (email) {
  // creation reg exp for validation of the email
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+.[a-z]{2,10}$",
    "i"
  );
  /*Implemented the test of the email variable whose value
    will = to the variable emailRegexp (and whose parameter
    will be the value of the email variable)
    thanks to a.log console*/
  let testEmail = emailRegExp.test(email.value);
  console.log(testEmail);
  return testEmail;
};
//---------------------------------------------------------------------
/* Set up an event that will apply when the birthdate field is changed
thanks to the change parameter and to a focntion that will select the variable "validBirthDate*/
formEvenenment.birthdate.addEventListener("change", function () {
  validBirthdate(this);
});
/* The validBirthdate variable or constant will have a function
whose parameter will be the variable birthdate*/
const validBirthdate = function (birthdate) {
  // creation reg exp for validation of the birthdate
  let birthdateRegExp = new RegExp("^[0-9]{4}-[0-9]{2}-[0-9]{2}$");

  let testBirthDate = birthdateRegExp.test(birthdate.value);
  console.log(testBirthDate);
};
//---------------------------------------------------------------------
/* Set up an event that will apply when the quantity field is modified
thanks to the change parameter and to a focntion that will select the variable "validQuantity*/
formEvenenment.quantity.addEventListener("change", function () {
  validQuantity(this);
});
/* The variable or constant validQuantity will have a function
whose parameter will be the variable birthdate*/
const validQuantity = function (quantity) {
  // creation reg exp for validation of the birthdate
  let quantityRegExp = new RegExp("^[0-9]{1,2}$");

  let testQuantity = quantityRegExp.test(quantity.value);
  console.log(testQuantity);
};
//---------------------------------------------------------------------
