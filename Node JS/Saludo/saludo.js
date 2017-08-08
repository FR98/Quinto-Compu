var readline = require('readline-sync');

var Formal = function(nombre){
	return "Buenas tardes "+ nombre;
}

var Informal = function(nombre){
	return "Como vas " + nombre + "?";
}

var saludo = function(saludo,nombre){
	return saludo(nombre);
}

var nombre = readline.question("Ingrese un nombre: ");

if (nombre == "Willi"){
	console.log(saludo(Formal,nombre));
}
else {
	console.log(saludo(Informal,nombre));
}