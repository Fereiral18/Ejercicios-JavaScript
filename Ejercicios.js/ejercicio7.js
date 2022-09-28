// 7. - Crea 3 arrays. El primero tendra 5 numeros y el segundo 
// se llamara pares y el tercero impares,ambos estaran vacios. Despues multiplica
// cada uno de los numeros del primer array por un numero 
// aleatorio entre 1 y 10, si el resultado es par guarda ese numero en 
// el array de pares y si es impar en el array de impares. Muestra por consola :
//     - La multiplicacion que se produce junto con su resultado con 
//     el formato 2 x 3 = 6
//     - El array de pares e impares.

const valores = [1,2,3,4,5];
let pares = [];
let impares = [];

for(const valore of valores){
    let random = Math.round(Math.random() * 10 + 1)
    const result = valore * random 
    

    console.log(`${valore} x ${random} = ${result}`);
    if(result % 2 == 0){
        pares.push(result)
    }else{
        impares.push(result)
    }
}
console.log(`${pares} es par`)
console.log(`${impares} es impar`)



