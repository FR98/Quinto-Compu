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

//rectangulo = figura 1
//trianglo = figura 2
//circulo = figura 3
//Ingrese un numero
//Ingrese base
//Ingrese altura
//Ingrese radio

var figura = 3;
var base = 2;
var altura = 5;
var radio = 4;
var calcular = new calcular();

if (figura == 1){
	console.log("El area del rectangulo es: ", calcular.areaRectangulo(base, altura));
} else if (figura == 2){
	console.log("El area del triangulo es: ", calcular.areaTriangulo(base, altura));
} else if (figura == 3){
	console.log("El area del circulo es: ", calcular.areaCirculo(radio));
}