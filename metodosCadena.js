/*concat( ) => junta dos o mas cadenas y retorna una nueva
let cadena = "Cadena de prueba";
let cadena1 = "<b> Cadena 1 de prueba";

resultado = cadena.concat(cadena1);
document.write(resultado);
---------------------------------------------*/

/* startswith( ) => si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false.

let cadena = "cadena de prueba";
let cadena1 = "cadena";

resultado = cadena.startsWith(cadena1);
resultado1 = cadena.startsWith("de",7);
document.write(resultado);
document.write(resultado1);
--------------------------------------------*/

/* endsWith( ) => si una cadena termina con los caracteres de otra cadena, devuelve true, sino devuelve false.

let cadena = "cadena de prueba";
let cadena1 = "prueba";

resultado = cadena.endsWith(cadena1);
resultado1 = cadena.endsWith("prueba",17);
document.write(resultado);
document.write(resultado1);
------------------------------------------*/

/* includes( ) => si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino devuelve false.

let cadena = "cadena de prueba, tontos para aprender";
let cadena1 = "tontos";

resultado = cadena.includes(cadena1);

document.write(resultado);
-----------------------------------------------*/

/* indexof( ) => devuelve el indice del primer caracter de la cadena, si no existe, devuelve -1

let cadena = "Aprendiendo el mejor lenguaje de programacion";
let cadena1 = "el";

resultado = cadena.indexOf(cadena1);

document.write(resultado);
-------------------------------------------------*/

/* lastlndexof( ) => devuelve el ultimo indice del primer caracter de la cadena, si no existe, devuelve -1

let cadena = "Aprendiendo el mejor lenguaje de programacion";
let cadena1 = "de";

resultado = cadena.lastIndexOf(cadena1);

document.write(resultado);
------------------------------------------------*/

/* padStart() [propuesta de Estandar] => Rellenar cadena a1 principio con los caracteres deseados.

let cadena = "somos tus amigos";
let cadena1 = "Johan ";

resultado = cadena.padStart(22,cadena1);

document.write(resultado);
------------------------------------------------*/

/* padEnd() [propuesta de ECMA] => Rellenar cadena a1 final con los caracteres

let cadena = "somos tus amigos ";
let cadena1 = "Johan";

resultado = cadena.padEnd(22,cadena1);

document.write(resultado);
------------------------------------------------*/

/* repeat() => Devuelve la misma cadena pero repetida la cantidad

let cadena = "somos tus amigos ";
let cadena1 = "";

resultado = cadena.repeat(10);

document.write(resultado);
------------------------------------------------*/

/* split() => Divide la cadena como le pidamos

let cadena = "Hola amigos que mas";

resultado = cadena.split(" ");

document.write(resultado);
------------------------------------------------*/

/* substring( ) => Nos retorna un pedazo de la cadena que seleccionamos

let cadena = "somos tus amigos";

resultado = cadena.substring(6, 20);

document.write(resultado);
------------------------------------------------*/

/* toLowerCase() => Convierte una cadena a minúscula

let cadena = "Convertir A miNuscula";

resultado = cadena.toLowerCase();

document.write(resultado);
------------------------------------------------*/

/* toUpperCase( ) => Convierte una cadena a mayúscula

let cadena = "Convertir a mayuscula";

resultado = cadena.toUpperCase();

document.write(resultado);
------------------------------------------------*/

/* tostring( ) => método devuelve una cadena que representa al objeto especificado.

let cadena = ["Johan", "Adrian"];

resultado = cadena.toString();

document.write(resultado[0]);
------------------------------------------------*/

/* trim( ) => elimina los espacios en blanco al principio y al final de una cadena.

let cadena = "   Johan      ";

resultado = cadena.trim();

document.write(resultado);
------------------------------------------------*/

/* trimEnd( ) => elimina los espacios en blanco a1 final de una cadena.

let cadena = "   Muchos espacios si   ";

resultado = cadena.trimEnd();

document.write(resultado);
------------------------------------------------*/

/* trimStart( ) => elimina los espacios en blanco a1 comienzo de una cadena.

let cadena = "   Muchos espacios si   ";

resultado = cadena.trimStart();

document.write(resultado.length);
------------------------------------------------*/

// value0f( ) => retorna el valor primitivo de un objeto string
