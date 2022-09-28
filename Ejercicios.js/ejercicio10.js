//Dado un array que con tiene [azul, rosa, verde, morado, rojo]

//determinar si el color introducido por un usuario mediante un prompt esta disponible o No. 

const colores=['azul', 'rosa', 'verde', 'morado', 'rojo']

const color = prompt('introduce un color').toLowerCase();

if(colores.indexOf(color)!== -1){
    console.log('Tu color se encuentra en el array');
}else{
    console.log('Tu color no esta definido');
}