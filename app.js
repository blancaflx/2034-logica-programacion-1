//Variables
let numeroSecreto = 8;
let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

console.log("numero usuario "+numeroUsuario);
console.log("numero secreto "+numeroSecreto);
/*
Este código realiza
la comparación
*/
if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    alert(`Acertaste, el número es: ${numeroUsuario}`);
} else {
    //La condición no se cumplió
    alert('Lo siento, no acertaste el número');
    
}

