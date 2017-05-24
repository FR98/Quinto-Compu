var inNumeroNuevo = document.getElementById("numeroNuevo");
var botonIngresar = document.getElementById("ingresar");
var botonHistograma = document.getElementById("histograma");
var parrafo = document.getElementById("parrafo");
var listaNumeros = []

botonIngresar.onclick = function() {
	if (inNumeroNuevo.value <= 100 && inNumeroNuevo.value >=0) {
		listaNumeros.add(inNumeroNuevo.value)
		parrafo.innerHTML = listaNumeros.value;	
	}
	else{
		window.alert("Ingrese un numero de 0 a 100");
	}
	//cuadrado.innerHTML = selColor.value;
	//document.getElementById("cuadrado").style.background = selColor.value;

}