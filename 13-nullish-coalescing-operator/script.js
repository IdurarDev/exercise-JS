/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

// Quelle est la valeur de retour ce code ?
// let banane;

// alert(banane ?? "pomme"); // pomme

// // Quelle est la valeur de retour ce code ?

// let banane = "Trop bon";

// alert(banane ?? "pomme"); // Trop bon

// // Comparison with "||"

// let pomme = null;
// let poire = "Trop bon !";
// let banane = null;


// alert(pomme || poire || banane || "pas bon."); // poire car c'est la première valeur qui est true

/* 

Ce que retourne, par définition, l'opérateur "||" ?

la première valeur qui vaut true 

*/

/**
 * Ce que retourne, par définition, l'opérateur "??" ?
 * 
 * la première variable qui est défini
 */

/**
 * 
 * Faut il utiliser ?? avec tous les autres opérateurs ?
 * 
 * non
 * 
 */

/**
 * Faut il ne jamais utiliser ?? avec tous les autres opérateurs ?
 * 
 * faux on peut l'utiliser avec certains oprérateurs
 */

/**
 * Faut il quelques fois utiliser ?? avec les autres opérateurs ?
 * 
 * oui
 */

//  Que retournent les opérations suivantes (se référer au opérateurs logiques) ?

let fruit = "poire" && "pomme" ?? "banane"

alert(fruit) // error syntax

// let fruit = ("poire" && "pomme") ?? "banane"

// alert(fruit) // pomme
// entre parenthèse il retourne le dernier opérandes 
// qui est pomme car les deux sont true donc il renvoi le dernier des deux true
