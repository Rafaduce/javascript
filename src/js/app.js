// Comentarios en Javascript

// Una sola línea

/* 
  Múltiples lineas
*/

/**
 * Múltiples lineas con asteriscos que den formato
 */

/**
 * TIPOS DE DATOS 
 */

// Numero
var numero = 10;

// String
var string = "Esto es un string";
var string2 = 'Esto es un string con comillas simples';
var string3 = `Esto es un string modernou`;

// Boolean
var boolean1 = true;
var boolean2 = false;

// Null 
var vacio = null;

// Udefined
var indefinido = undefined;

/**
 * OPERADORES ARITMETICOS 
 */

var suma = 3 + 6;
var resta = 7 - 3;
var multiplica = 8 * 8;
var division = 5 / 2;

// Modulo
var modulo = 6 % 4;

/**
 * OPERADORES LÓGICOS
 */

var mayorQue = 9 > 8;
var menorQue = 7 < 4;
var mayorQueOIgual = 7 >= 7;
var menorQueOIgual = 4 <= 3;
var igual = 4 == 3;
var desigual = 4 != 3;

var valorAChecar = 20;
var esValido = (valorAChecar <= 20) || (valorAChecar >= 30)
    //  var esValido = (valorAChecar <= 20) && (valorAChecar >= 30)
console.log("Es valido ? : ", esValido);