var Valor1 = prompt("Ingrese el primer valor...");
var Operador = prompt("Ingrese que operacion quiere");
var Valor2 = prompt("Ingrese el segundo valor a sumar");

// Lo convierto a número
var Valor1 = parseInt(Valor1);
var Valor2 = parseInt(Valor2);
var Resultado = null; 

/* // Operación condicional IF ELSE
if (Operador == "+") {
	Resultado = Valor1 + Valor2;
}
else if (Operador == "-") {
	Resultado = Valor1 - Valor2;
}
else if (Operador == "*") {
	Resultado = Valor1 * Valor2;
}
else if (Operador == "/") {
	Resultado = Valor1 / Valor2;
} 
else {
	console.log("No ingresaste operación válida");
}*/

// EJERCITANDO COMANDO SWTICH
switch(Operador) {
  case "+":
    Resultado = Valor1 + Valor2;
    break;
  case "-":
    Resultado = Valor1 - Valor2;
    break;
  case "*":
    Resultado = Valor1 * Valor2;
    break;
  case "/":
    Resultado = Valor1 / Valor2;
    break;
  default:
      console.log("Operador inexistente");
}
// imprimiendo resultado
console.log(Resultado);


/* // VARIAS OPERACINES PARA SEGUIR CONTINUANDO
var continuar = confirm("Desea continuar operando?");

	if (continuar == true) {
		var Operador = prompt("Ingrese que operacion quiere");
		var Valor3 = prompt("Ingrese el primer valor...");	

		var Valor3 = parseInt(Valor3);

		switch(Operador) {
	  case "+":
	    Resultado = Resultado + Valor3 ;
	    break;
	  case "-":
	    Resultado = Resultado - Valor3;
	    break;
	  case "*":
	    Resultado = Resultado * Valor3;
	    break;
	  case "/":
	    Resultado = Resultado / Valor3;
	    break;
	  default:
	      console.log("Operador inexistente");
		}
		console.log(Resultado);

			var continuar = confirm("Desea continuar operando?");

			if (continuar == true) {
				var Operador = prompt("Ingrese que operacion quiere");
				var Valor4 = prompt("Ingrese el primer valor...");	

				var Valor4 = parseInt(Valor4);

				switch(Operador) {
			  case "+":
			    Resultado = Resultado + Valor4 ;
			    break;
			  case "-":
			    Resultado = Resultado - Valor4;
			    break;
			  case "*":
			    Resultado = Resultado * Valor4;
			    break;
			  case "/":
			    Resultado = Resultado / Valor4;
			    break;
			  default:
			      console.log("Operador inexistente");
				}
				console.log(Resultado);

					 var continuar = confirm("Desea continuar operando?");

						if (continuar == true) {
							var Operador = prompt("Ingrese que operacion quiere");
							var Valor4 = prompt("Ingrese el primer valor...");	

							var Valor4 = parseInt(Valor4);

							switch(Operador) {
						  case "+":
						    Resultado = Resultado + Valor4 ;
						    break;
						  case "-":
						    Resultado = Resultado - Valor4;
						    break;
						  case "*":
						    Resultado = Resultado * Valor4;
						    break;
						  case "/":
						    Resultado = Resultado / Valor4;
						    break;
						  default:
						      console.log("Operador inexistente");
							}
							console.log(Resultado);
						}
						else {
							console.log(Resultado);
						}
			}
			else {
				console.log(Resultado);
			}
}
else {
	console.log(Resultado);
} */

/* // CONDICION WHILE + EVALUACION
while (confirm("Desea continuar operando?")) {
	var Operador = prompt("Ingrese que operacion quiere");
	var Valor4 = prompt("Ingrese el primer valor...");	
	var Valor4 = parseInt(Valor4);

	switch(Operador) {
			  case "+":
			    Resultado = Resultado + Valor4;
			    break;
			  case "-":
			    Resultado = Resultado - Valor4;
			    break;
			  case "*":
			    Resultado = Resultado * Valor4;
			    break;
			  case "/":
			    Resultado = Resultado / Valor4;
			    break;
			  default:
			      console.log("Operador inexistente");
				}
} console.log(Resultado); */

/* // CONDICION DO > WHILE + EVALUACION
var Resultado = 0;

do {

	var Valor1 = prompt("Ingrese valor...");
	var Operador = prompt("Ingrese que operacion quiere");
	// Lo convierto a número
	var Valor1 = parseInt(Valor1);

	switch(Operador) {
  case "+":
    Resultado = Resultado + Valor1;
    break;
  case "-":
    Resultado = Resultado - Valor1;
    break;
  case "*":
    Resultado = Resultado * Valor1;
    break;
  case "/":
    Resultado = Resultado / Valor1;
    break;
  default:
      console.log("Operador inexistente");
	} 

} while (confirm("Desea continuar operando?"))

console.log(Resultado); */


//  CONDICIONALES dentro de IF

// || = OR
// && = AND


// ITERACION FOR + IF
var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

for (var i=0; i < dias.length; i++) {
	console.log(i, dias[i]);

    if (dias[i] === 'jueves' || dias[i] === 'sabado') {
        console.log('Encontre a ' + dias[i]);
        //alert(dias[i]);
}

// ITERACION de FOR + IF para comparar largos
var semana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
var mes = [semana, semana, semana, semana];
var anio = [mes, mes, mes, mes, mes, mes, mes, mes,mes, mes, mes, mes];

console.log(anio[0][1][3]);

var masLargo = semana[0];
for (var i = 0; i < semana.length; i++) {
    if (semana[i].length > masLargo.length) {
        masLargo = semana[i];
    }
}

console.log('el dia mas largo (caracteres)', masLargo);
