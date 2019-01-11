function modulo()
{
  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;
  var result = parseFloat(firstNumber) % parseFloat(secondNumber);
  alert(result);
//querySelector permet de sélectionné la Premiere occurrence d'un selecteur CSS.
var buton =document.querySelector('input[type="submit"]');
//On utilise la fonction sans les parentheses car c'est l'evenement qui déclenche l'exécution de la fonction.
bouton.onclick = reste;
