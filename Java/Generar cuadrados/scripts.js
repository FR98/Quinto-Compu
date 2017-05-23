var inCantidad = document.getElementById("cantidad");
var selColor = document.getElementById("color");
var botonGenerar = document.getElementById("generar");
var cuadrado = document.getElementById("cuadrado");
var parrafo = document.getElementById("parrafo");
botonGenerar.onclick = function() {
	//cuadrado.innerHTML = selColor.value;
	document.getElementById("cuadrado").style.background = selColor.value;
	//parrafo.innerHTML = inCantidad.value;

}