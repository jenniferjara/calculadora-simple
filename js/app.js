/*var opcion = parseInt(prompt("Escoja una opción \n" + 
	"1. Suma\n" +
	"2. Resta\n" +
	"3. Multiplicación\n" + 
	"4. División\n" + 
	"5. Comparación\n" +
	"6. Resto"));
if(opcion < 7 && opcion>0){
	var numero1 = parseInt(prompt("Ingrese el #1"));
	var numero2 = parseInt(prompt("Ingrese el #2"));
}

switch (opcion){
	case 1:
		var suma = numero1 + numero2;
		document.write("La suma es: " + suma);
		break;
	case 2:
		var resta = numero1 - numero2;
		document.write("La resta es: " + resta);
		break;
	case 3:
		var multiplica = numero1 * numero2;
		document.write("La multiplicación es: " + multiplica);
		break;
	case 4:
		var division = numero1 / numero2;
		document.write("La división es: " + division);
		break;
		
	case 5:
		if (numero1>numero2){
			document.write("El "+ numero1 + " es mayor que " + numero2);
		}else if(numero1==numero2){
			document.write( numero1 + " es igual a " + numero2);
		}
		else {
			document.write("El "+ numero1 + " es menor que " + numero2);
		} 
		break;
	case 6:
		if(numero1>numero2 && numero1>0 && numero2>0){
			var resto=numero1%numero2;
			document.write("El resto es:"+resto);

		}
		else{
			document.write("El resto no exixte");
		}
		break;
	default: 
		document.write("No es una opción");
		break;
}*/

var condicion = true;
do {
	var opcion = parseInt(prompt("Escoja una opción \n" + 
	"1. Suma\n" +
	"2. Resta\n" +
	"3. Multiplicación\n" + 
	"4. División\n" + 
	"5. Comparación\n" +
	"6. Resto\n" + 
	"0. Salir"));

	if(opcion < 7 && opcion>0){
		var numero1 = parseInt(prompt("Ingrese el #1"));
		var numero2 = parseInt(prompt("Ingrese el #2"));
	}

	switch (opcion){
		case 1:
			var suma = numero1 + numero2;
			document.write("La suma es: " + suma);
			break;
		case 2:
			var resta = numero1 - numero2;
			document.write("La resta es: " + resta);
			break;
		case 3:
			var multiplica = numero1 * numero2;
			document.write("La multiplicación es: " + multiplica);
			break;
		case 4:
			var division = numero1 / numero2;
			document.write("La división es: " + division);
			break;
			
		case 5:
			if (numero1>numero2){
				document.write("El "+ numero1 + " es mayor que " + numero2);
			}else if(numero1==numero2){
				document.write( numero1 + " es igual a " + numero2);
			}
			else {
				document.write("El "+ numero1 + " es menor que " + numero2);
			} 
			break;
		case 6:
			if(numero1>numero2 && numero1>0 && numero2>0){
				var resto=numero1%numero2;
				document.write("El resto es:"+resto);
			}
			else{
				document.write("El resto no exixte");
			}
			break;
		case 0:
			condicion = false;
			break;
		default: 
			alert("No es una opción");
			break;
	}
	
} while(condicion);

