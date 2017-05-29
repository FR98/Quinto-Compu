var inNumeroNuevo = document.getElementById("numeroNuevo");
var botonIngresar = document.getElementById("ingresar");
var parrafo = document.getElementById("parrafo");
var listaNumeros = [];
var botonHistograma = document.getElementById("histograma");
var rango1 = 0;
var rango2 = 0;
var rango3 = 0;
var rango4 = 0;
var rango5 = 0;
var rango6 = 0;
var rango7 = 0;
var rango8 = 0;
var rango9 = 0;
var rango10 = 0;

botonIngresar.onclick = function() {
	if (inNumeroNuevo.value <= 100 && inNumeroNuevo.value >=0) {
		listaNumeros.push(inNumeroNuevo.value);
		parrafo.innerHTML = listaNumeros;
	}
	else{
		window.alert("Ingrese un numero de 0 a 100");
	}
}

botonHistograma.onclick = function() {
	for (i = 0; i < listaNumeros.lenght; i++) {
		if (listaNumeros[i] >= 0 && listaNumeros[i] <= 10){
			rango1 += 1;
		}
		
	}
}