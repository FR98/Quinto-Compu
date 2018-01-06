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
				if (lineas[j][i] == 0){
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
		return mapa;
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
				if (state.robotDirec == "UP"){
					state.mapa[state.robotY][state.robotX] = 0;
					state.robotY -= 1;
					state.mapa[state.robotY][state.robotX] = "^";
				} else if (state.robotDirec == "RIGHT"){
					state.mapa[state.robotY][state.robotX] = 0;
					console.log(state.robotY, state.robotX);
					state.robotX += 1;
					state.mapa[state.robotY][state.robotX] = ">";
					console.log(state.robotY, state.robotX);
				} else if (state.robotDirec == "DOWN"){
					state.mapa[state.robotY][state.robotX] = 0;
					state.robotY += 1;
					state.mapa[state.robotY][state.robotX] = "v";
				} else {
					state.mapa[state.robotY][state.robotX] = 0;
					state.robotX -= 1;
					state.mapa[state.robotY][state.robotX] = "<";
				}
			} else if (nuevasInstrucciones[i] == "ROTATE" || nuevasInstrucciones[i] == "rotate"){
				if (state.robotDirec == "UP"){
					state.robotDirec = "RIGHT";
					console.log("RIGHT");
					state.mapa[state.robotY][state.robotX] = ">";
				} else if (state.robotDirec == "RIGHT"){
					state.robotDirec = "DOWN";
					console.log("DOWN");
					console.log(state.mapa[state.robotY][state.robotX]);
					state.mapa[state.robotY][state.robotX] = "v";
					console.log(state.mapa[state.robotY][state.robotX]);
				} else if (state.robotDirec == "DOWN"){
					state.robotDirec = "LEFT";
					console.log("LEFT");
					console.log(state.mapa[state.robotY][state.robotX]);
					state.mapa[state.robotY][state.robotX] = "<";
					console.log(state.mapa[state.robotY][state.robotX]);
				} else {
					state.robotDirec = "UP";
					console.log("UP");
					state.mapa[state.robotY][state.robotX] = "^";
				}
			} else if (nuevasInstrucciones[i] == "PICK" || nuevasInstrucciones[i] == "pick"){
				console.log(nuevasInstrucciones[i]);
			} else {
				console.log("Instruccion invalida");
			}
		}
		zonaRurple.innerHTML = "";
		console.log(state.mapa);
		//zonaRurple.innerHTML = state.mapa;
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