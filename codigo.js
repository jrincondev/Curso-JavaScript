// VARIABLES
/*Tipos de datos
string = "Cadena de texto"
number = 20
booleano = true // o false
*/

/*Casos especiales de datos
undefined, null, NaN
*/

/*Tipos de variables
let variable = 20;
var variable2 = "david";
const variable3 = "johan";
*/

/*Ejemplo

let nombre = prompt("Dime tu nombre");
let apellido = prompt("Dime tu apellido");
let documento = prompt("Ingresa tu numero de documento");
let sexo = prompt("Define tu sexo");

alert("Mi nombre es: " + nombre + "\n Mi apellido es: " + apellido + "\n Mi numero de documento es: " + documento + "\n Mi sexo es: " + sexo);
*/

//OPERADORES
/* Operadores de comparacion

let numero = 23;
let numero2 = 235;

//equality = numero == numero2;
//inequality = numero != numero2;
//identity = numero === numero2;
//Non_identity = numero !== numero2;

document.write(identity)
*/

// Operadores logicos
/*
let valor = 15;
let valor2 = 54;

let afirmacion =  valor < valor2;
let afirmacion2 = valor != valor2;
let resultado = afirmacion && afirmacion2;

let afirmacion3 =  valor > valor2;
let afirmacion4 = valor == valor2;
let resultado2 = afirmacion3 || afirmacion4;

let afirmacion5 =  valor > valor2;
let afirmacion6 = valor == valor2;
let resultado3 = !afirmacion5;

num1 = 23;
num2 = 25;
num3 = 87;
num4 = 86;
num5 = 45;

op = true || false
document.write(op)

CAMEL CASE
laPrimeraPalabraVaConMinusculaLaSiguientePalabraEmpiezaConMayuscula

CONDICIONALES
nombre = "juan";

if (nombre == "johan") {
    alert("tu nombre es " + nombre)
}
else if (nombre == "david") {
    alert("tu nombre es " + nombre)
}
else{
    alert("tu nombre no esta identificado con los que estan en el registro")
}
*/

/* EJEMPLO HISTORIA DE COFLA 1

dineroCofla = prompt("¿Cuato dinero tiene cofla?");
dineroRoberto = prompt("¿Cuato dinero tiene roberto?");
dineroPedro = prompt("¿Cuato dinero tiene pedro?");

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Cofla, Comprate el helado de agua");
    alert("y te sobran " + (dineroCofla - 0.6));
}
else if (dineroCofla >= 1 && dineroCofla < 1.6){
    alert("Cofla, Comprate el helado de crema");
    alert("y te sobran " + (dineroCofla - 1));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert("Cofla, Comprate el helado marca heladix");
    alert("y te sobran " + (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert("Cofla, Comprate el helado marca heladovich");
    alert("y te sobran " + (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9){
    alert("Cofla, Comprate el helado de helardo");
    alert("y te sobran " + (dineroCofla - 1.8));
}
else if (dineroCofla >= 2.9 ){
    alert("Cofla, Comprate el helado confites o el pote de 1/4KG");
    alert("y te sobran " + (dineroCofla - 2.9));
}
else{
    alert("Cofla, No tienes dinero suficiente para comprarte un helado cofla")
}
*/

// ARRAYS
/* definicion y usos 
formas de crear un array

let frutas = ["banana", "manzana", "sandia", "pera"];
document.write(frutas[3]);
*/

// ARRAYS ASOCIATIVOS
/*definicion 
sintaxis y usos

let pc = {
    nombre: "JohanDev",
    procesador: "Intel Core I7",
    ram: "16GB",
    espacio: "1TB"
}

let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc["ram"];
let espacio = pc["espacio"];

frase = `El nombre que le tengo a mi pc es: <b>${nombre}</b> <br>
        El procesador que tengo es: <b>${procesador}</b> <br>
        La memoria ram que tengo es: <b>${ram}</b> <br>
        El espacio que tengo es: <b>${espacio}</b>`;

document.write(frase);
*/

/* BUCLES E ITERACION
// let numero = 0;

// -- While

// while (numero < 6) {
//     numero++;
//     document.write(numero);
// }

// -- do while 

// do {

//     document.write(numero);
//     numero++;

// }while(numero < 6)

// -- break

// while (numero < 1000) {
//     numero++;
//     document.write(numero);
//     if (numero == 10) {
//         break;
//     }
// }

// -- for
// El for se compone de tres partes

// 1. declaramos e inicializamos
// 2. condicion
// 3. iteramos

// for (let i = 0; i < 6; i++) {
//     document.write(i);    
// }

// -- continue
// for (let i = 0; i < 6; i++) {

//     if (i == 12) {
//         continue;
//     }

//     document.write(i);
// }

// -- for in y for of
// for in nos devuelve el indice, la posicion donde se encuentran los elementos
// for of nos devuelve el valor de esos elementos

// let animales = ["gato", "perro", "tiranosaurio rex"];

// for (animal in animales) {
//     document.write(animal)
// }

// document.write("<br>");

// for (animal of animales) {
//     document.write(animal)
// }

// -- label

// var nombre = ["maria", "juan", "pedro"];
// var nombre2 = ["johan", nombre, "marcos", "luis"];

// forRancio:
// for (let array in nombre2) {
//     if (array == 1) {
        
//         for (let array of nombre) {
//             if (array == "maria") {
//                 // continue forRancio;
//             }
//             document.write(array + "<br>");
//         }
//     }else{
//         document.write(nombre2[array] + "<br>");
//     }
// }
*/










