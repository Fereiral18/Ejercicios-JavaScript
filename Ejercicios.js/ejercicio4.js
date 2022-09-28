let numero = Number(prompt("Introduzca un numero"))
let divisores = 0;
if(numero == 1) console.log(`El numero no es valido`);
else{

for(let i=2; i<numero; i++){
    if(numero%i == 0){
        console.log(`${numero} / ${i} = ${numero/i} No es primo`)
        divisores++
        break
        }
    }
}

if(divisores == 0) console.log(`${numero} es primo`)