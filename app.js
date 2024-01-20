//Variables
let numeroSecreto = 4;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'intento';
let maximosIntentos = 3;

while(numeroUsuario != numeroSecreto){

    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

    console.log("numero usuario "+numeroUsuario);
    console.log("numero secreto "+numeroSecreto);
    /*
    Este código realiza
    la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez': 'veces'}`);
    } else {
        if(numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor');
        }
        else{
            alert('El numero secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        intentos++;
        palabraVeces= 'intentos';

        if (intentos > maximosIntentos){
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
    // alert('Lo siento, no acertaste el número');
        
    }

}


