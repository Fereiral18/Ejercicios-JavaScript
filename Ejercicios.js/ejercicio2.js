// 2.- Escribe un programa que pueda calcular el area de 3 figuras geometricas
// ,triangulo, rectangulo y circulo. en primer lugar pregunta de que figura se quiere calcular el area, despues
// solicita los datos que necesites para calcularlo. 
//     Triangulo = b * h/2
//     rectangulo = b * h 
//     circulo = π *r2 (pi * radia al cuadrado)

let figure = prompt("De que figura deseas calcular su Area : Triangle, rectangle y circle")

let base;
let heigth;
let radius;

switch(figure){
    case "triangle": 
        base = prompt("Cual es el valor de la base?");
        heigth = prompt("Cual es el valor de la altura?");
        console.log(`El valor de la base del triangulo es: ${(base*heigth)/2}`)
        break
    case "rectangle":
        base= prompt("Cual es el valor de la base?");
        heigth = prompt("Cual es el valor de la altura?");
        console.log(`El valor de la base del rectangulo es: ${base*heigth}`)
        break
    case "circle":
        radius = prompt("Cual es el valor del radio?"); 
        console.log(`El valor del radio es: ${Math.PI*Math.pow(radius,2)}`)
        default: 
        console.log("No existe esa figura geometrica.")
}


















// let figure = prompt("Introduce la figura geometrica que deseas saber su area: triangle, rectangle or circle")

// let base;
// let height;
// let radius;

// switch(figure){
//         case "triangle" :
//             base = prompt("Introduce la base del triangulo")
//             height = prompt("Introduce la altura del triangulo");
//             console.log(`El area del triangulo es ${(base*height)/2}`)
//             break
//             case "rectangle" :
//                 base= prompt("Introduce la base del rectangulo")
//                 height= prompt("introduce la altura del rectangle")
//                 console.log(`El area del rectangulo es ${base*height}`)
//                 break
//                 case "circle" :
//                     radius = prompt("introduce el valor del radio")
//                     console.log(`El area del circulo es ${Math.PI * Math.pow(radius,2)}`)
//                     break
//                     default: console.log("la figura geometrica no es valida")
// }