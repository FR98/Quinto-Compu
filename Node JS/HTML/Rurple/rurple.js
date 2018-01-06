function rurple(state){
	var body = document.createElement("div");
	body.className = "divBody";
	var zonaRurple = document.createElement("div");
	zonaRurple.className = "divZonaRurple";
	var zonaMapa = document.createElement("div");
	zonaMapa.className = "divZonaMapa";
	var zonaInstrucciones = document.createElement("div");
	zonaInstrucciones.className = "divZonaInstrucciones";
	var mapaBtn = document.createElement("button");
	mapaBtn.className = "btnMapa";
	var instruccionesBtn = document.createElement("button");
	instruccionesBtn.className = "btnInstrucciones";

	var mapaTexto = document.createElement("textarea");
	mapaTexto.className = "divMapaTexto";
	var instruccionesTexto = document.createElement("textarea");
	instruccionesTexto.className = "divInstruccionesTexto";

	zonaInstrucciones.appendChild(instruccionesTexto);
	zonaMapa.appendChild(mapaTexto);
	body.appendChild(zonaRurple);
	body.appendChild(zonaMapa);
	body.appendChild(zonaInstrucciones);

	var nombreBtnMapa = document.createTextNode("Generar Mapa");
	mapaBtn.appendChild(nombreBtnMapa);
	var nombreBtnInstrucciones = document.createTextNode("Procesar Instrucciones");
	instruccionesBtn.appendChild(nombreBtnInstrucciones);
	body.appendChild(mapaBtn);
	body.appendChild(instruccionesBtn);

	function imprimirMapa(){
		zonaRurple.innerHTML = "";
		var lineas = state.mapa;
		var mapa = "";
		
		for (j = 0; j < lineas.length; j++){
			for (i = 0; i < lineas[j].length; i++){
				if (lineas[j][i] == "*"){
					//300px/17cuadritos
					pared = document.createElement("div");
					pared.className = "pared";
				} else if (lineas[j][i] == 0){
					mapa += 0;
				} else {
					mapa += lineas[j][i];
					if (lineas[j][i] == "^"){
						state.robotX = i;
						state.robotY = j;
						state.robotDirec = "UP";
					} else if (lineas[j][i] == ">"){
						state.robotX = i;
						state.robotY = j;
						state.robotDirec = "RIGHT";
					} else if (lineas[j][i] == "v"){
						state.robotX = i;
						state.robotY = j;
						state.robotDirec = "DOWN";
					} else if (lineas[j][i] == "<"){
						state.robotX = i;
						state.robotY = j;
						state.robotDirec = "LEFT";
					}
				}
			}
			mapa += "<br>";
			zonaRurple.innerHTML = mapa;
		}
		return zonaRurple;
	}

	function mover(){
		console.log("Funcion mover");
	}

	function rotar(){
		if (state.robotDirec == "UP"){
			state.robotDirec = "RIGHT";
			console.log(state.robotDirec);
			console.log(state.mapa[state.robotY][state.robotX]);
			state.mapa[state.robotY][state.robotX] = ">";
			console.log(state.mapa[state.robotY][state.robotX]);
		} else if (state.robotDirec == "RIGHT"){
			state.robotDirec = "DOWN";
			console.log(state.robotDirec);
			console.log(state.mapa[state.robotY][state.robotX]);
			state.mapa[state.robotY][state.robotX] = "v";
			console.log(state.mapa[state.robotY][state.robotX]);
		} else if (state.robotDirec == "DOWN"){
			state.robotDirec = "LEFT";
			console.log(state.robotDirec);
			console.log(state.mapa[state.robotY][state.robotX]);
			state.mapa[state.robotY][state.robotX] = "<";
			console.log(state.mapa[state.robotY][state.robotX]);
		} else {
			state.robotDirec = "UP";
			console.log(state.robotDirec);
			console.log(state.mapa[state.robotY][state.robotX]);
			state.mapa[state.robotY][state.robotX] = "^";
			console.log(state.mapa[state.robotY][state.robotX]);
		}
		zonaRurple.innerHTML = "";
		console.log(state.mapa);
		//imprimirMapa();
	}

	function pick(){
		console.log("Funcion pick");
	}

	mapaBtn.onclick = function(){
		state.mapa = mapaTexto.value.split("\n");
		imprimirMapa();
		mapaTexto.value = "";
	}

	instruccionesBtn.onclick = function(){
		var nuevasInstrucciones = instruccionesTexto.value.split("\n");

		for (i = 0; i < nuevasInstrucciones.length; i++){
			if (nuevasInstrucciones[i] == "MOVE" || nuevasInstrucciones[i] == "move"){
				mover();
			} else if (nuevasInstrucciones[i] == "ROTATE" || nuevasInstrucciones[i] == "rotate"){
				rotar();
			} else if (nuevasInstrucciones[i] == "PICK" || nuevasInstrucciones[i] == "pick"){
				pick();
			} else {
				console.log("Instruccion invalida");
			}
		}
	}

	return body;
}

//Robot: x, y, direction
//Pared: x, y
//Moneda: x, y, cantidad

function render(posicion, elemento, state){
	posicion.innerHTML = "";
	posicion.appendChild(elemento(state));
}

document.getElementById("titulo").innerHTML = "Rurple JS";
var lugar = document.getElementById("middle");
render(lugar, rurple, {mapa: "", robotX: 1, robotY: 1, robotDirec: "UP"});