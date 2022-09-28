// 6 - Escribe un programa que permita ir introducciendo una serie de indeterminado 
// numeros mientras su suma no supere 50, cuando esto ocurra, se debe mostrar el total 
// acumulado y el contador de cuantos numeros se han introducido.

let suma = 0;
let contador = 0;

while(suma < 50){
    suma += Number(prompt('Introduce un numero para a;adir a la suma'))
    contador++
    
}

console.log(`La suma total es de : ${suma}`);
console.log(`La cantidad de numeros introducidos es de : ${contador}`);

