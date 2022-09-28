// Variable1 = Auto
// variable2 = Bicicleta
// // Dado 2 variable que contengan un string   'auto'  y la otra variable que contenga 'bicicleta',
//   validar si el string es un auto, en el caso de ser un auto, tendrá que devolver la siguiente 
//   estructura "Yo soy un (nombre de la variable)" en el caso de no serlo devolver 
//   "Yo no soy un auto, soy (nombre de la variable)"

let transporte = "autos";
let transporte1 = "bicicleta";

if(transporte == "auto"){
    console.log(`Hola soy un ${transporte}`);
}else{
    console.log(`Hola no soy un ${transporte}, soy una ${transporte1}`);
}

