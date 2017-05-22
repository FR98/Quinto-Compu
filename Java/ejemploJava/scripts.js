var botonCambiarRisa = document.getElementById("cambiar");
botonCambiarRisa.onclick = function() {

	var texto = "waka waka";
	for(var i = 0; i < 10; i++ ) {
		texto += i; 
	}
	var risa = document.getElementById("risa");
	risa.innerHTML = texto;
}

var	inAutomatico =document.getElementById("automatico");
var	txAutomatico =document.getElementById("texto-automatico");

inAutomatico.onkeyup = function() {
	txAutomatico.innerHTML = inAutomatico.value;
}

var selWebsite = document.getElementById("website");
var botonIr = document.getElementById("ir");
botonIr.onclick = function() {
	window.location = selWebsite.value;
} 
var square = document.getElementById("square");
var botonAnimar = document.getElementById("animar");
botonAnimar.onclick = function(){
	square.classList.add("open");
}