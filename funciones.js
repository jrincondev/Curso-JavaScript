// PARAMETROS
// se declaran dentro de la function, fuera de la funcion no sirve
// funcion normal
// function sumar(num1, num2){
//     let resultado = num1 + num2;
//     document.write(resultado);
// }

// funcion flecha
// const saludar = (nombre) => {
//     let saludo = `¡Hola ${nombre}! ¿como te va esta tarde?`;
//     document.write(saludo);
// } 

// Ejemplo historia de cofla 2
// let free = false;
// const validarEntrada = (time) => {
//     let edad = prompt("Que edad tienes muchach@");
//     if (edad > 18) {
//         if (time >= 2 && time < 7 && free == false) {
//             alert("Podes pasar gratis, sos la primera persona despues de las 2 AM");
//             free = true;
//         }else{
//             alert(`Son las ${time}:00Hs y podes pasar, pero te toca pagar la entrada`);
//         }
//     }else{
//         alert("Mira mano, sos menor de edad y no podes pasar, dabete para tu casa");
//     }
// }

/* Ejemplo 2
let cantidad = prompt("Cuantos alumnos son");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)), 0];    
}

const tomarAsistencia = (nombre, p) => {
    let asistencia = prompt(nombre);
    if (asistencia == "p" || asistencia == "P") {
        alumnosTotales[p][1]++;
    }
}

for (i = 0; i < 30; i++){
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    }
}

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    Asistencias: <b>${alumnosTotales[alumno][1]}</b><hr>
    Ausencias: <b>${30 - alumnosTotales[alumno][1]}</b>`;

    if (30 - alumnosTotales[alumno][1] > 10) {
        resultado += "<b style='color: red'>REPROBADO POR INASISTENCIAS</b> <br><br>";
    }else{
        resultado+= "<br><br>";
    }
    document.write(resultado);
}
*/

/* Ejemplo 3

const sumar = (numero1, numero2) => {
    return parseInt(numero1) + parseInt(numero2);
}
const restar = (numero1, numero2) => {
    return parseInt(numero1) - parseInt(numero2);
}
const dividir = (numero1, numero2) => {
    return parseInt(numero1) / parseInt(numero2);
}
const multiplicar = (numero1, numero2) => {
    return parseInt(numero1) * parseInt(numero2);
}

alert("Que operacion deseas realizar");
let operacion = prompt("1: Suma 2: Resta 3: Division 4: Multiplicacion");

if (operacion == 1) {
    let numero1 = prompt("Ingrese el primer valor para sumar");
    let numero2 = prompt("Ingrese el segundo vaor para sumar");
    resultado = sumar(numero1, numero2);
    alert(`El resultado es ${resultado}`);
}
else if (operacion == 2) {
    let numero1 = prompt("Ingrese el primer valor para restar");
    let numero2 = prompt("Ingrese el segundo vaor para restar");
    resultado = restar(numero1, numero2);
    alert(`El resultado es ${resultado}`);
}
else if (operacion == 3) {
    let numero1 = prompt("Ingrese el primer valor para dividir");
    let numero2 = prompt("Ingrese el segundo vaor para dividir");
    resultado = dividir(numero1, numero2);
    alert(`El resultado es ${resultado}`);
}
else if (operacion == 4) {
    let numero1 = prompt("Ingrese el primer valor para multiplicar");
    let numero2 = prompt("Ingrese el segundo vaor para multiplicar");
    resultado = multiplicar(numero1, numero2);
    alert(`El resultado es ${resultado}`);
}
else{
    alert("No se encontro la operacion que deseas");
}
*/