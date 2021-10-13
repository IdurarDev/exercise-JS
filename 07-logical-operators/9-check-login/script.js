/*  Votre code Javascript vient ici:
			- Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
			- N'oubliez pas de sauvegarder pour afficher les changements.
*/

let connect = prompt("Qui êtes vous ? ");


if (connect == "Admin") {
	let password = prompt("Enter your password: ");
	if (password == "TheMaster") {
		alert("Welcome! ")
	} else if (password == "Other") {
		alert("Wrong password")
	} else if (password == null || password == "") {
		alert("Canceled")
	}
} else if (connect == "Other") {
	alert("I don't know you")
} else if (connect == null || connect == "") {
	alert("Canceled")
}

/** Soluce formateur

let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}

*/