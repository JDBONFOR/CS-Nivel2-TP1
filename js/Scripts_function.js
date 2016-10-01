/* Funciones en JavaScript

parseInt();
isNaN();
alert();
confirm();
prompt();

*/

function myFunction	(nombre, apellido) {
	// console.log(nombre, apellido);
	return nombre + " " + apellido;
}
//myFunction("Juan", "Bonforti");
var miNombreCompleto = myFunction("Juan", "Bonforti");
console.log(miNombreCompleto);


function calculadora(valor1, valor2, operacion) {
	console.log(valor1);
	if (operacion === "+") {
		return valor1 + valor2;
	}
}

var v1 = 1;
var v2 = 2;
var resultado = calculadora(v1, v2, "+");
console.log(resultado);


// funcion solicitando datos por pantalla
function calculador(valor1, valor2, operacion) {
    console.log(valor1, valor2, operacion);
    if (operacion === 'suma') {
        return valor1 + valor2;
    } else if (operacion === 'resta') {
        return valor1 - valor2;
    }
}
var v1 = parseInt(prompt('Valor1?'));
var v2 = parseInt(prompt('Valor2?'));
var operacion = prompt('Operacion? (suma || resta)');

var resultadoSuma = calculador(v1, v2, operacion);
console.log('Resultado=', resultadoSuma);