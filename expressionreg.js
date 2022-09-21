//---------------------------------------------------------------------
/* MEP d'un event qui s'appliquera quand le champs prénom sera modifié
grace au parametre change et grace à une fonction qui selectionnera this variable "validFirst"*/
formEvenenment.first.addEventListener("change", function () {
  validFirstname(this);
});
/* La variable ou constante validFirst disposera d'une fonction
           dont le paramêtre sera la variable first*/
const validFirstname = function (first) {
  // creation reg exp for validation of the first
  let firstRegExp = new RegExp("^[a-zA-Z]{2,}$", "i");
  /*Mis en place du test de la variable first dont la valeur
          sera = à la variable firstRegExp (et dont le parametre
          sera la valeur de la variable first)
          grâce à un console.log*/
  let testFirstName = firstRegExp.test(first.value);
  console.log(testFirstName);
};

//---------------------------------------------------------------------

/* MEP d'un event qui s'appliquera quand le champs prénom sera modifié
         grace au parametre change et à une fonction qui selectionnera this variable "validFirst"*/
formEvenenment.last.addEventListener("change", function () {
  validLastName(this);
});
/* La variable ou constante validFirst disposera d'une fonction
             dont le paramêtre sera la variable last*/
const validLastName = function (last) {
  // creation reg exp for validation of the last
  let lastRegExp = new RegExp("^[a-zA-Z]{2,}$", "i");
  /*Mis en place du test de la variable last dont la valeur
            sera = à la variable lastRegExp (et dont le parametre
            sera la valeur de la variable last)
            grâce à un console.log*/
  let testLastName = lastRegExp.test(last.value);
  console.log(testLastName);
  return testLastName;
};

//---------------------------------------------------------------------

/* MEP d'un event qui s'appliquera quand le champs email sera modifié
   grace au parametre change et à une fonction qui selectionnera this variable "validEmail"*/
formEvenenment.email.addEventListener("change", function () {
  validEmail(this);
});
/* La variable ou constante validEmail disposera d'une fonction
     dont le paramêtre sera la variable email*/
const validEmail = function (email) {
  // creation reg exp for validation of the email
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+.[a-z]{2,10}$",
    "i"
  );
  /*Mis en place du test de la variable email dont la valeur
    sera = à la variable emailRegexp (et dont le parametre
    sera la valeur de la variable email)
    grâce à un console.log*/
  let testEmail = emailRegExp.test(email.value);
  console.log(testEmail);
  return testEmail;
};

//---------------------------------------------------------------------

/* Mis en place d'un event qui s'appliquera lorsque le champs birthdate sera modifié
grace au paramêtre change et à une focntion qui selectionnera la variable "validBirthDate*/

formEvenenment.birthdate.addEventListener("change", function () {
  validBirthdate(this);
});
/* La variable ou constante validBirthdate disposera d'une fonction
dont le paramêtre sera la variable birthdate*/

const validBirthdate = function (birthdate) {
  // creation reg exp for validation of the birthdate
  let birthdateRegExp = new RegExp("^[0-9]{4}-[0-9]{2}-[0-9]{2}$");

  let testBirthDate = birthdateRegExp.test(birthdate.value);
  console.log(testBirthDate);
};

//---------------------------------------------------------------------

/* Mis en place d'un event qui s'appliquera lorsque le champs quantity sera modifié
grace au paramêtre change et à une focntion qui selectionnera la variable "validQuantity*/

formEvenenment.quantity.addEventListener("change", function () {
  validQuantity(this);
});
/* La variable ou constante validQuantity disposera d'une fonction
dont le paramêtre sera la variable birthdate*/

const validQuantity = function (quantity) {
  // creation reg exp for validation of the birthdate
  let quantityRegExp = new RegExp("^[0-9]{1,2}$");

  let testQuantity = quantityRegExp.test(quantity.value);
  console.log(testQuantity);
};

//---------------------------------------------------------------------
