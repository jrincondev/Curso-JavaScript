/* A) Cofla ya está terminando el primer semestre del primer ciclo, la tarea que le debe realizar es mucho mas avanzada de la que tenia antes, además de suma, resta, multiplicación y división ahora también necesitará calcular, raices cuadradas y cúbicas.

CREAR SOLUCIONES:
perfeccionar calculadora para poder implementar las nuevas funciones */

/* class Calculadora {
    constructor() { 
    }
sumar = (numero1, numero2) => {
    return parseInt(numero1) + parseInt(numero2);
}
restar = (numero1, numero2) => {
    return parseInt(numero1) - parseInt(numero2);
}
dividir = (numero1, numero2) => {
    return parseInt(numero1) / parseInt(numero2);
}
multiplicar = (numero1, numero2) => {
    return parseInt(numero1) * parseInt(numero2);
}
potenciar = (numero1,exponecial) => {
    let numero = numero1;

    return numero**exponecial;
}
raizCuadrada = (numero) => {
    return Math.sqrt(numero);
}
raizCubica = (numero) => {
    return Math.cbrt(numero);
}
}

const calculadora = new Calculadora();

alert("Que operacion deseas realizar");
let operacion = prompt("1: Suma 2: Resta 3: Division 4: Multiplicacion 5: Potenciacion 6: Raiz cuadrada 7: Raiz cubica");

if (operacion == 1) {
    let numero1 = prompt("Ingrese el primer valor para sumar");
    let numero2 = prompt("Ingrese el segundo valor para sumar");
    resultado = calculadora.sumar(numero1, numero2);
    alert(`El resultado es ${resultado}`);
}
else if (operacion == 2) {
    let numero1 = prompt("Ingrese el primer valor para restar");
    let numero2 = prompt("Ingrese el segundo valor para restar");
    resultado = calculadora.restar(numero1, numero2);
    alert(`El resultado es ${resultado}`);
}
else if (operacion == 3) {
    let numero1 = prompt("Ingrese el primer valor para dividir");
    let numero2 = prompt("Ingrese el segundo valor para dividir");
    resultado = calculadora.dividir(numero1, numero2);
    alert(`El resultado es ${resultado}`);
}
else if (operacion == 4) {
    let numero1 = prompt("Ingrese el primer valor para multiplicar");
    let numero2 = prompt("Ingrese el segundo valor para multiplicar");
    resultado = calculadora.multiplicar(numero1, numero2);
    alert(`El resultado es ${resultado}`);
}
else if (operacion == 5) {
    let numero1 = prompt("Ingrese numero a potenciar");
    let numero2 = prompt("Ingrese el exponente");
    resultado = calculadora.potenciar(numero1, numero2);
    alert(`El resultado es ${resultado}`);
}
else if (operacion == 6) {
    let numero1 = prompt("Conocer la raiz cuadrada de:");
    resultado = calculadora.raizCuadrada(numero1);
    alert(`El resultado es ${resultado}`);
}
else if (operacion == 7) {
    let numero1 = prompt("Conocer la raiz cubica de:");
    resultado = calculadora.raizCubica(numero1);
    alert(`El resultado es ${resultado}`);
}
else{
    alert("No se encontro la operacion que deseas");
}*/

/* B) La falcultad de cofla está por comenzar y ya las 12 materias de la carrera tienen asignado un profesor y todos los alumnos que se anotaron en dichas clases, peeero necesitamos ver esto mas ordenadamente.

CREAR SOLUCIONES:
- Crear una funcion que a1 pasarle como parametro la materia nos devuelva:
*"profesor asignado"
*el nombre de todos los alumnos
- Crear función que nos diga en cuantas clases está cofla.
- Nombrar las clases en las que está y los profesores de cada una.*/

const obtenerInformacion = (materia) =>{
    materias = {
        Matematicas: ["Doble j", "adrian", "margarita", "evencio"],
        Programacion: ["Johan", "adrian", "margarita", "evencio"],
        Español: ["Gallardo", "adrian", "saudy", "evencio", "roberto"],
        Sociales: ["Joseito", "adrian", "margarita", "patricio"]
    }
    if (materias[materia] !== undefined) {
        return [materias[materia], materia];
    }else{
        return materias;
    }
}

const mostrarInformacion = (materia) =>{
    let informacion = obtenerInformacion(materia);

    if (informacion !== false) {
        let profesor = informacion[0][0];
        let alumnos = informacion[0];
        alumnos.shift();
        document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
            Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>
            `);
    }
}

const cantidadDeClases = (alumno) =>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion) {
        if (informacion[info].includes(alumno)) {
            cantidadTotal++;
            clasesPresentes.push(" " + info);
        }
    }
    return `<b style="color:blue">${alumno}</b> 
    esta en <b>${cantidadTotal} clases: </b><b style="color:green">${clasesPresentes}</b>`;
}

mostrarInformacion("Español");
mostrarInformacion("Matematicas");
mostrarInformacion("Programacion");
mostrarInformacion("Sociales");

document.write(cantidadDeClases("adrian"));