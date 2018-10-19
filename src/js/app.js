Imprime de 1 a 10000
for (var i = 1; i <= 10000; i++) {
    console.log(i);
}

Imprime numeros pares del 0 al 10000
i += 2
for (var i = 0; i <= 10000; i = i + 2) {
    console.log(i);
}

for (var i = 0; i <= 10000; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

Suma de numeros pares del 1 al 10000
var suma = 0;
for (var i = 1; i <= 10000; i++) {
    if (i % 2 == 0) {
        suma = suma + i;
    }
}
console.log(suma);

Crear la serie de Fibonacci
var fibonacci = 0;
for (var i = 0; i <= 5; i++) {
    var aSumar = i + fibonacci;
    fibonacci = fibonacci + aSumar;
    console.log(fibonacci)
}
console.log("Resultado", fibonacci);

function fibonacci(num) {
    var a = 1
    var b = 0
    var temp;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--
        console.log(b);
    }
}

FAIL

function fibonacci(num) {
    if (num <= 1) {
        return 1
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
console.log(fibonacci(100))

var carro = {
    modelo: "2018",
    marca: "VW",
    encendido: false,
    arrancar: function(llave) {
        if (llave === "123") {
            this.encendido = true;
        } else {
            console.log("Llave incorrecta");
        }
    }
}

var objeto1 = {
    valor1: 34,
    valor2: "Hola",
    suma: function(num1, num2) {
        return num1 + num2;
    },
    objetoInterno: {
        valorInterno: 34,
        valorInterno2: "Adios",
    }
}


var misa = {
    edad: 21,
    sexo: "Masculino",
    pais: "Mexico"
}

Arrays
var array = [];
for (var i = 1; i <= 100; i++) {
    array.push(i);
}
console.log(array);

var fabrica = {
    arrayDeColores: ["rojo", "azul", "verde", "violeta", "gris"],

    creaCoches: function() {
        for (var i = 0; i < this.arrayDeColores.length; i++) {
            console.log("El carro " + this.arrayDeColores[i])
        }
    }
}