/*Variables*/
let clickInscription = document.getElementById('inscription');
let clickConnexion = document.getElementById('connexion');
let signUp = document.getElementById('signUp');
let logIn = document.getElementById('logIn');


/*fonctions*/
clickConnexion.onclick = function () {
  logIn.style.display = "block";
  signUp.style.display = "none";
}
clickInscription.onclick = function () {
  logIn.style.display = "none";
  signUp.style.display = "block";
}