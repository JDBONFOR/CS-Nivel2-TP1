
	function add (valor1, valor2) {
		return valor1 + valor2;
	}

	function sub (valor1, valor2) {
		return valor1 - valor2;
	}

	function div (valor1, valor2) {
		return valor1 / valor2;
	}

	function mul (valor1, valor2) {
		return valor1 * valor2;
	}
	
	var valor1 = parseInt(prompt("Ingrese el primer Valor"));
	var operador = prompt("Ingrese la operación que desea, + - * / ...");
	var valor2 = parseInt(prompt("Ingrese el segundo Valor"));
	

	switch(operador) {
	  case "+":
	  	operador = "+";
	  	console.log(add(valor1, valor2));
	    break;
	  case "-":
	    operador = "-";
	    console.log(sub(valor1, valor2));
	    break;
	  case "*":
	    operador = "*";
	    console.log(mul(valor1, valor2));
	    break;
	  case "/":
	    operador = "/";
	    console.log(div(valor1, valor2));
	    break;
	  default:
	    console.log("Operador inexistente");
	}

