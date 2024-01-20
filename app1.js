alert('¡Bienvenida y bievenido a nuestro sitio web!');
let nombre = "luna";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;

alert('¡Error! Completa todos los campos');

let mensajeDeError = "Error! completa los campos";
alert(mensajeDeError);

nombre = prompt("Cual es tu nombre?");
edad = prompt("Cual es tu edad?");

if(edad >= 18){
    alert('¡Puedes obtener tu licencia de conducir!');
}


// ejercicios
//desafio1
let diaSemana = prompt("Que dias es? ");

if(diaSemana == 'Sabado' || diaSemana == 'Domingo'){
    alert("Buen fin!!");
}else{
    alert("dia de la semana bro");
}

//desafio2
let numero = prompt('Escribe un número positivo o negativo');
if (numero > 0) {
    alert('Número positivo');
} else if (numero < 0) {
    alert('Número negativo');
} else {
    alert('El número es cero');
}
//desafio 3
let puntuacion = 120;
if (puntuacion >= 100) {
    console.log('¡Enhorabuena, has ganado!');
} else {
    console.log('Inténtalo de nuevo para ganar.');
}

//desafio
//1contador
 let contador = 1;
 while(contador <= 10){
    console.log('iteracion ', contador);
    contador = contador +1;
 }

//desafio2
let contador1 = 10;
while(contador >= 0){
   console.log('iteracion ', contador);
   contador = contador -1;
}

//desafio3
let numeroMaximo = prompt("Ingresa un número para la cuenta regresiva:");

while (numeroMaximo >= 0) {
console.log(numeroMaximo);
numeroMaximo--;
}

//desafio 4
let numeroMaximo1 = prompt("Ingresa un número para la cuenta progresiva:");
let contador2 = 0;

while (contador <= numeroMaximo1) {
console.log(contador2);
contador++
}