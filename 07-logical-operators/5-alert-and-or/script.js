/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

alert( null || 2 && 3 || 4 ); // 3

// le && est prioritaire ) OR, elle s'exécute en 1er 
// le resultat de 2 && 3 = 3, donc l'expression devient
// null || 3 || 4 
// donc comme OR renvoi la 1ère valeur true il renvoi : 3
