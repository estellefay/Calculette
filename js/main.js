


//let num0 = document.createElement("div");
//num0.classList.add('numero0');
//num0.innerHTML = 0;
//document.querySelector('body').appendChild(num0); // je selecionne le body et j'appel la variable number 
//num0.addEventListener('click', function() {  // j'analyse quand je clique  sur le num 
  //  let number = this.innerHTML; // je crée une variable qui ajoute e qu'ont à cliquée
    //document.querySelector('#calcul').append(number); // je selection l'ID et j'y ajoute la variable numer 
//});


//Création de variables 
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let num3 = document.querySelector("#num3");
let num4 = document.querySelector("#num4");
let num5 = document.querySelector("#num5");
let num6 = document.querySelector("#num6");
let num7 = document.querySelector("#num7");
let num8 = document.querySelector("#num8");
let num9 = document.querySelector("#num9");
let num0 = document.querySelector("#num0");
let plus = document.querySelector("#plus");
let moins = document.querySelector("#moins");
let fois = document.querySelector("#fois");
let divi = document.querySelector("#divi");
let egale = document.querySelector("#egale");
let clear = document.querySelector("#clear");

//Création d'une variable pour stocker l'opération
let donneeCalculatrice = "";

//Création de addEventListener et dire, quand je clique et j'execute la fonction
num1.addEventListener("click", donneesCalcul);
num2.addEventListener("click", donneesCalcul);
num3.addEventListener("click", donneesCalcul);
num4.addEventListener("click", donneesCalcul);
num5.addEventListener("click", donneesCalcul);
num6.addEventListener("click", donneesCalcul);
num7.addEventListener("click", donneesCalcul);
num8.addEventListener("click", donneesCalcul);
num9.addEventListener("click", donneesCalcul);
num0.addEventListener("click", donneesCalcul);
plus.addEventListener("click", donneesCalcul);
moins.addEventListener("click", donneesCalcul);
fois.addEventListener("click", donneesCalcul);
divi.addEventListener("click", donneesCalcul);

//add event listener et execute la fonction 
egale.addEventListener("click", resultatCalcul);
clear.addEventListener("click", clearCalcul);

//fonction qui crée le calcul et l'affiche
function donneesCalcul(){
  donneeCalculatrice += this.value; // AJouter a la calculatrice le valeur sur lesquelle on à cliquer 
  // LEs valeur on été défini dans le html
  document.querySelector("#resultat").innerHTML = donneeCalculatrice; // ajouter au à l'id resultat les donner stocker dans la calculette 
}

//fonction pour faire le calcul
function resultatCalcul(){
  let resultatCalcul = eval(donneeCalculatrice); // varaibale resultat qui transforme les chaines de caractaire en operation et nombre pour en faire un calcule et lui passer 
  // Lui passer la valeur donneCalculatrice qui à recuperrer les donne de tous click 
  document.querySelector("#resultat").innerHTML += " = "+resultatCalcul; // ajouter  l'id dans le html le = et la variable resultat qu'ont à calculer
  donneeCalculatrice = resultat;
}

//fonction pour effacer les données
function clearCalcul(){
  donneeCalculatrice = ""; // remise à zero des donner de la calculette pour les future calcule
  document.querySelector("#resultat").innerHTML = ""; // Afficher " " dans l'id resultat
}