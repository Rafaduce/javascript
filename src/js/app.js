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
    //  console.log("Es valido ? : ", esValido);

// IF

if (9 > 15 || 5 == 7) {
    // ... codigo que se ejecuta si valorAChecar es true
    console.log("Es verdadero 😛")
} else if (10 > 6 && 0 != 0) {
    // ... codigo que se ejecuta si valorAChecar es false
    console.log("Es verdadero en el segundo intento 😛")
} else {
    console.log("Es falso 😦")
}

// LOOP WHILE
var contador = 0;
while (contador < 10) {
    console.log("Hola 🤠", contador);
    contador = contador + 1;
}

// LOOP DO WHITE
var contador = -100;
do {
    contador = contador + 1;
    if (contador < 0) {
        contador = 0;
        console.log("A ver si me veo");
    }
    console.log("Hola 🤠", contador);
} while (contador < 10)

// LOOP FOR
console.log("Loop for")
for (var i = 0; i < 10; i++) {
    console.log("Hola 🤠", i);
}