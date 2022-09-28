let numero = Number(prompt("Introduzca un valor"))
let result = 1

for(let i = numero; i>1; i--){
    result *= i
}

console.log(`El factorial de ${numero} es ${result}`);