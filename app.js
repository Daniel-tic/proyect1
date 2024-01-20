
let numberoMaxPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numberoMaxPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maxIntentos = 3;

console.log(numeroSecreto);
while( numeroUsuario != numeroSecreto){
   // alert('Bienvenido a nuestro sitio WEB');
    numeroUsuario = parseInt(prompt(`Indica un numero por favor entre 1 y ${numberoMaxPosible}  por favor`));
    console.log('numero ingresado: ',numeroUsuario);
    console.log(typeof(numeroUsuario));

    //comparacion
    //console.log('comparacion, ', numeroSecreto == numeroUsuario);
    // operador ternario
    //prueba de subida

    if (numeroUsuario == numeroSecreto){
        alert(`Acertaste el numero, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ?'vez':'veces'}`);
    }
    else{
        if(numeroUsuario > numeroSecreto){
            alert('no acertaste es menos: ');
        }
        else {
            alert('no acertaste, es mas : ');
        }
        //alert('no acertaste, era : '+ numeroSecreto);
        intentos++;
        palabraVeces = 'veces';
        if(intentos > maxIntentos){
            alert ('Llegaste al final de intentos '+ maxIntentos);
            break;
        }
    }
}