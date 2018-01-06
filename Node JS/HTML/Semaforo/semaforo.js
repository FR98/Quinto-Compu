function semaforo(state){
	//Crear semaforo
	var divSemaforo = document.createElement("div");
	divSemaforo.className = "semaforo";
	//Crear bombillos
	var divBombilloRojo = document.createElement("div");
	divBombilloRojo.className = "bombilloRojo";
	var divBombilloRojo_encendido = document.createElement("div");
	divBombilloRojo_encendido.className = "bombilloRojo_encendido";
	var divBombilloAmarillo = document.createElement("div");
	divBombilloAmarillo.className = "bombilloAmarillo";
	var divBombilloAmarillo_encendido = document.createElement("div");
	divBombilloAmarillo_encendido.className = "bombilloAmarillo_encendido";
	var divBombilloVerde = document.createElement("div");
	divBombilloVerde.className = "bombilloVerde";
	var divBombilloVerde_encendido = document.createElement("div");
	divBombilloVerde_encendido.className = "bombilloVerde_encendido";

	//Agregar bombillos al semaforo
	if (i == 0){
		divSemaforo.appendChild(divBombilloRojo_encendido);
	} else {divSemaforo.appendChild(divBombilloRojo);}
	if (i == 2){
		divSemaforo.appendChild(divBombilloAmarillo_encendido);
	} else {divSemaforo.appendChild(divBombilloAmarillo);}
	if (i == 1){
		divSemaforo.appendChild(divBombilloVerde_encendido);
	} else {divSemaforo.appendChild(divBombilloVerde);}

	return divSemaforo;
}

function render(posicion, componente, state){
	posicion.innerHTML = "";
	posicion.appendChild(componente(state));
}

var bodyTop = document.getElementById("top");
bodyTop.innerHTML = " ";
var h1Titulo = document.createElement("h1");
h1Titulo.innerHTML = "Semaforo";
bodyTop.appendChild(h1Titulo);

var lugar = document.getElementById("middle");
var btnCambiar = document.getElementById("cambiar");
render(lugar, semaforo, {color_encendido: i});
var i = 0;
btnCambiar.onclick = function(){
	render(lugar, semaforo, {color_encendido: i});
	i += 1;
	if (i == 3){i = 0;}
}