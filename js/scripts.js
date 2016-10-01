var miVariable = 101010.1010; //tipo numero con decimal
var dolar = 15.60; //tipo númerico
var nombre = "JuanDa"; //tipo texto
console.log(miVariable, dolar, nombre);

/* 
	Comentari multilínea

	var numero = 17;
*/

var x = undefined; // Valor inicial de una variable.

// prueba de operadoras

var Valor1 = 2;
var Valor2 = 2;
var Resultado = Valor1 + Valor2;
console.log(Resultado);

var Valor1 = 2;
var Valor2 = 2;
var Resultado = Valor1 / Valor2;
console.log(Resultado);

var Valor1 = 2;
var Valor2 = 2;
var Resultado = Valor1 * Valor2;
console.log(Resultado);

// Intentaremos operar con un número definido como String
var Valor1 = 2;
var Valor2 = "2";
var Resultado = Valor1 * Valor2;
console.log(Resultado, "ok si multiplico");

var Valor1 = 2;
var Valor2 = "2a";
var Resultado = Valor1 + Valor2;
console.log(Resultado, "Suma los valores por concatenado");

// Concatenado de variables
var Nombre2 = "Juan";
var Apellido = "Bonforti";
var nombreCompleto = Nombre2 + " " + Apellido;
console.log(nombreCompleto);

// Variables arrays y booleans

var boolean1 = true;
var boolean2 = false;

var arrayTextos = ["Juan", "Marcos", "Gonza", "Hernán"];
var arrayNumeros = [1,2,3,4,5,6];
var arrayMixto = [1, "Juan", 2, "Gonza", 3];
console.log(arrayTextos);
console.log(arrayNumeros);
console.log(arrayMixto);

// Array multinivel
var arrayMulti = [123,[333,444,555], 222];
console.log(arrayMulti);

// Impresión del valor específico del array (a gusto)
console.log(arrayTextos[0]);

// Sentencia "Alert", prompt y confirm, no utilizarla debido a que detiene todas las funciones posteriores hasta interactuar.
alert("Qué malo que soy!")

var sosDeRacing = confirm("sos de racing?");
console.log(sosDeRacing);

var NoSosDeRacing = prompt("por qué no sos de Racing");
console.log(NoSosDeRacing);

// Funcion para cambiar el tipo de dato TEXTO a NUMERO
var Materias = prompt("A cuantas materias te anotaste este cuatrimestre?");
console.log(Materias);
console.log(parseInt(Materias));

// Operador ++, implisitamente suma 1 al valor ingresado
var Materias2 = prompt("A cuantas materias te anotaste este cuatrimestre?");
Materias2 = parseInt(Materias2);
console.log(Materias2);
console.log(++Materias2);
console.log(--Materias2);
console.log(Materias2+10); 

// otro ejemplo

var veces = prompt ("cuantas veces haces crossfit");
veces = parseInt(veces);
var resultado = veces > 5;
console.log(resultado) 


// Calculadora












