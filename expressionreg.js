//---------------------------------------------------------------------

/* MEP d'un event qui s'appliquera quand le champs email sera mofifié
   grace à une fonction qui selectionnera this variable "validEmail"*/
formEvenenment.email.addEventListener("change", function () {
  validEmail(this);
});

/* La variable ou constante validEmail disposera d'une fonction
     dont le paramêtre sera la variable email*/
const validEmail = function (email) {
  // creation reg exp for validation of the email
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );
  /*Mis en place du test de la variable email dont la valeur
    sera = à la variable emailRegexp (et dont le parametre
    sera la valeur de la variable email)
    grâce à un console.log*/
  let testEmail = emailRegExp.test(email.value);
  console.log(testEmail);
};

//---------------------------------------------------------------------

/* MEP d'un event qui s'appliquera quand le champs prénom sera mofifié
     grace à une fonction qui selectionnera this variable "validFirst"*/
formEvenenment.first.addEventListener("change", function () {
  validFirstname(this);
});

/* La variable ou constante validFirst disposera d'une fonction
       dont le paramêtre sera la variable first*/
const validFirstname = function (first) {
  // creation reg exp for validation of the first
  let firstRegExp = new RegExp("^[a-zA-Z]+$", "g");
  /*Mis en place du test de la variable first dont la valeur
      sera = à la variable firstRegExp (et dont le parametre
      sera la valeur de la variable first)
      grâce à un console.log*/
  let testFirstName = firstRegExp.test(first.value);
  console.log(testFirstName);
};
//---------------------------------------------------------------------

/* MEP d'un event qui s'appliquera quand le champs prénom sera mofifié
     grace à une fonction qui selectionnera this variable "validFirst"*/
formEvenenment.last.addEventListener("change", function () {
  validLastName(this);
});

/* La variable ou constante validFirst disposera d'une fonction
         dont le paramêtre sera la variable last*/
const validLastName = function (last) {
  // creation reg exp for validation of the last
  let lastRegExp = new RegExp("^[a-zA-Z]+$", "g");
  /*Mis en place du test de la variable last dont la valeur
        sera = à la variable lastRegExp (et dont le parametre
        sera la valeur de la variable last)
        grâce à un console.log*/
  let testLastName = lastRegExp.test(last.value);
  console.log(testLastName);
};
