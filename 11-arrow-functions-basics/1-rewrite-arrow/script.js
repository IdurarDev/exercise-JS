/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/
// expression de fonction 

// let sayHi = function() {
//   alert('saluuuut')
// }; // préférable de mettre ' ; ' a la fin d'une expression de function
// sayHi()

const ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree ?",
  function() { alert("You agreed.") ;},
  function() { alert("You canceled the execution"); }
);

// Soluce formateur 
/**

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
 
**/