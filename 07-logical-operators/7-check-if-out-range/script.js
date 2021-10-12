/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

let age = prompt("Entrez un age");

if (age < 14 || age > 90) {
  alert("ok")
} else {
  alert("pas ok")
}

if (!(age > 14 && age < 90)) {
  alert("ok")
} else {
  alert("pas ok")
}

