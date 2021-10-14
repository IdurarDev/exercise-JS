/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/
// j'ai compris le code mais ai fait un copier coller
function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

alert(isPrime()) // n'importe quel nombre fonctionne

// const isPrime = num => {
//   for(let i = 2; i < num; i++)
//     if(num % i === 0) return false;
//   return num > 1;
// }

// const isPrime = num => {
//   for(let i = 2, s = Math.sqrt(num); i <= s; i++)
//       if(num % i === 0) return false; 
//   return num > 1;
// }