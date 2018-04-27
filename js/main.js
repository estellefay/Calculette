
// Mes variables 

// MES NUMBRES


let num0 = document.createElement("div");
num0.classList.add('numero0');
num0.innerHTML = 0;
document.querySelector('body').appendChild(num0); // je selecionne le body et j'appel la variable number 
num0.addEventListener('click', function() {  // j'analyse quand je clique  sur le num 
    let number = this.innerHTML; // je crée une variable qui ajoute e qu'ont à cliquée
    document.querySelector('#calcul').append(number); // je selection l'ID et j'y ajoute la variable numer 
});


let num2 = document.createElement("div");
num2.classList.add('numero2');
num2.innerHTML = 2;
document.querySelector('body').appendChild(num2);
num2.addEventListener('click', function() {
    let  number = this.innerHTML;
    document.querySelector('#calcul').append(number);
});

let num3 = document.createElement("div");
num3.classList.add('numero3');
num3.innerHTML = 3;

document.querySelector('body').appendChild(num3);
num3.addEventListener('click', function() {
    let number = this.innerHTML;
    document.querySelector('#calcul').append(number);
});


let num4 = document.createElement("div");
num4.classList.add('numero4');
num4.innerHTML = 4;
document.querySelector('body').appendChild(num4);
num4.addEventListener('click', function() {
    let number = this.innerHTML;
    document.querySelector('#calcul').append(number);
});


let num5 = document.createElement("div"); 
num5.classList.add('numero5');
num5.innerHTML = 5
document.querySelector('body').appendChild(num5);
num5.addEventListener('click', function() {
    let number = this.innerHTML;
    document.querySelector('#calcul').append(number);
});


let num6 = document.createElement("div");
num6.classList.add('nummero6');
num6.innerHTML = 6;
document.querySelector('body').appendChild(num6);
num6.addEventListener('click', function() {
    let number = this.innerHTML;
    document.querySelector('#calcul').append(number);
});

let num7 = document.createElement("div");
num7.classList.add('numero7');
num7.innerHTML = 7;
document.querySelector('body').appendChild(num7);
num7.addEventListener('click', function() {
    let number = this.innerHTML;
    document.querySelector('#calcul').append(number);
});

let num8 = document.createElement("div");
num8.classList.add('numero8');
num8.innerHTML = 8;
document.querySelector('body').appendChild(num8);
num8.addEventListener('click', function() {
    let number = this.innerHTML;
    document.querySelector('#calcul').append(number);
})


let num9 = document.createElement("div");
num9.classList.add('numero9');
num9.innerHTML = 9;
document.querySelector('body').appendChild(num9);
num9.addEventListener('click', function() {
    let number = this.innerHTML;
    document.querySelector('#calcul').append(number);
});




// OPERATOR 
let plus = document.createElement("div"); 
plus.classList.add('operationPlus');
plus.innerHTML = '+' ;
document.querySelector('body').appendChild(plus);
plus.addEventListener('click', function() {
    let operator = this.innerHTML;
    document.querySelector('#calcul').append(operator);
});

let moins = document.createElement("div");
moins.classList.add('operationMoins');
moins.innerHTML = '-';
document.querySelector('body').appendChild(moins);
moins.addEventListener('click', function() {
    let operator = this.innerHTML;
    document.querySelector('#calcul').append(operator);
});


//
let ce = document.createElement("div");
ce.classList.add('delete');
ce.innerHTML = 'CE'
document.querySelector('body').appendChild(ce)
ce.addEventListener('click', function() {
    document.querySelector('#calcul').innerHTML = "";
})



// RESULTAT
let egale = document.createElement("div");
egale.classList.add('operationEgale');
egale.innerHTML = '='; 
document.querySelector('body').appendChild(egale);



egale.addEventListener('click', function() {
    // (\d+)(.)(\d+);
    //let regex = new RegExp('/(\d+)(.)(\d+)/g');
    let calcul = document.querySelector('#calcul').innerHTML; // efacer 
    debugger;

   // document.querySelector('#calcul').appendChild(number);
    //let total = number + operator + number; 
    document.querySelector('#result').append(total);   // selctionner l'id et l'afficher dans le html 
});
// let clean = remove('#calcul')
// Au moment ou on clique sur egal, on analyse le calcul, et, selon l'operateur, on fait l'operation correspondante

