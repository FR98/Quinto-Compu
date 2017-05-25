var selColor = document.getElementById("color");
var botonGenerar = document.getElementById("generar");
var cantidad = document.getElementById("cantidad");

botonGenerar.onclick = function() {
	//document.getElementById("cuadrado").style.background = selColor.value;
	for (i = 0; i < parseInt(cantidad.value); i++){
		var nuevoCuadrado = document.createElement("div");
		nuevoCuadrado.style.background = selColor.value;
		nuevoCuadrado.style.height = "50px";
		nuevoCuadrado.style.width = "50px";
		nuevoCuadrado.style.margin = "5px";
		nuevoCuadrado.style.float = "left";
		document.body.appendChild(nuevoCuadrado);
	}
}