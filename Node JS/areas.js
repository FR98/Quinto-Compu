var readline = require('readline-sync');

function calcular(figura){
	this.areaRectangulo = function(base, altura){
		return base * altura;
	}
	this.areaTriangulo = function(base, altura){
		return (base * altura)/2;
	}
	this.areaCirculo = function(radio){
		return Math.PI * Math.pow(radio,2);
	}
}

var figura = readline.question("1. Rectangulo" + "\n" + "2. Triangulo" + "\n" + "3. Circulo" + "\n" + "Escoja un numero: ");
var calcular = new calcular();

if (figura == 1){
	var base = readline.question("Ingrese la base: ");
	var altura = readline.question("Ingrese la altura: ");
	console.log("El area del rectangulo es: ", calcular.areaRectangulo(base, altura));
} else if (figura == 2){
	var base = readline.question("Ingrese la base: ");
	var altura = readline.question("Ingrese la altura: ");
	console.log("El area del triangulo es: ", calcular.areaTriangulo(base, altura));
} else if (figura == 3){
	var radio = readline.question("Ingrese el radio: ");
	console.log("El area del circulo es: ", calcular.areaCirculo(radio));
} else {
	console.log("Opcion Invalida.")
}