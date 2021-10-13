/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

if (-1 || 0) alert( 'first' ); 
// s'exécute car il vaut true mêm si négatif il y a que 0 qui est false 
if (-1 && 0) alert( 'second' ); // s'exécute pas
if (null || -1 && 1) alert( 'third' ); // s'exécute