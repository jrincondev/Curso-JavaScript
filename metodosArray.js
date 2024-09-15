// Transformadores
/* pop( ) => elimina el último elemento de un array y lo devuelve.

let nombres = ["pedro", "brayan", "jorge"];

console.log(nombres);

resultado = nombres.pop();

console.log(resultado);
console.log(nombres);
-----------------------------------*/

/* shift( ) => elimina el primer elemento de un array y lo devuelve.

let nombres = ["adrian", "josue", "francia"];

console.log(nombres);

resultado = nombres.shift();

console.log(resultado);
console.log(nombres);
------------------------------------*/

/* push( ) => agrega un elemento a1 array a1 final de la lista.

let nombres = ["brayan", "andrea", "david"];

console.log(nombres);

resultado = nombres.push("jose", "elena");

console.log(resultado);
console.log(nombres);
---------------------------------------*/

/* reverse( ) => invierte el orden de los elementos de un array.

let numeros = [1,2,3,4,5];

console.log(numeros);

resultado = numeros.reverse();

console.log(resultado);
----------------------------------*/

/* unshift( ) => agrega uno o más elementos a1 inicio del array, y devuelve la nueva longitud del array

let nombres = ["brayan", "andrea", "david"];

console.log(nombres);

resultado = nombres.unshift("jose", "elena");

console.log(resultado);
console.log(nombres);
-------------------------------*/

/* sort() => ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado.

let nombres = ["brayan", "andrea", "david"];

console.log(nombres);

resultado = nombres.sort();

console.log(resultado);
--------------------------------*/

/* splice( ) => cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

let nombres = ["brayan", "andrea", "david","jorge"];

console.log(nombres);

resultado = nombres.splice(3,1,"jose", "elena");

console.log(resultado);
console.log(nombres);
----------------------------------*/

// Accesores
/* join( ) => une todos los elementos de una matriz (u objeto similar) en una cadena y la devuelve.

let nombres = ["brayan", "andrea", "david","jorge"];

console.log(nombres);

resultado = nombres.join(" - $");

console.log(resultado);
--------------------------------*/

/* slice() => devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido).

let nombres = ["brayan", "andrea", "david","jorge"];


resultado = nombres.slice(1);

console.log(resultado);
---------------------------------*/

/* - Metodos ya vistos en cadenas: tostring(), indexof(), lastlndexof(), includes()

let nombres = ["brayan", "andrea", "david","jorge","david"];

resultado1 = nombres.includes("david");
resultado2 = nombres.indexOf("david");
resultado3 = nombres.lastIndexOf("david");
resultado4 = nombres.toString();

console.log(resultado4);
--------------------------------*/

// De Repetición
/* filter( ) => crea un nuevo array con todos los elementos que cumplan la condición.

let nombres = ["brayan", "andrea", "david","jorge","federico"];

resultado = nombres.filter(numero => numero.length > 5);
resultado1 = nombres.filter(
    (numero) => {
    numero.length > 6
});

console.log(resultado);
------------------------------*/

/* forEach( ) => ejecuta la función indicada una vez por cada elemento del array.

let nombres = ["brayan", "andrea", "david","jorge","federico"];

nombres.forEach(numero => console.log(numero));
------------------------------*/
