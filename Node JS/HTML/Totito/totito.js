function tablero(state, posicion){
	//Crear tablero y espacios
	var divTablero = document.createElement("div");
	divTablero.className = "tablero";
	var divEspacio0_0 = document.createElement("div");
	divEspacio0_0.className = "espacio0_0";
	var divEspacio0_1 = document.createElement("div");
	divEspacio0_1.className = "espacio0_1";
	var divEspacio0_2 = document.createElement("div");
	divEspacio0_2.className = "espacio0_2";
	var divEspacio1_0 = document.createElement("div");
	divEspacio1_0.className = "espacio1_0";
	var divEspacio1_1 = document.createElement("div");
	divEspacio1_1.className = "espacio1_1";
	var divEspacio1_2 = document.createElement("div");
	divEspacio1_2.className = "espacio1_2";
	var divEspacio2_0 = document.createElement("div");
	divEspacio2_0.className = "espacio2_0";
	var divEspacio2_1 = document.createElement("div");
	divEspacio2_1.className = "espacio2_1";
	var divEspacio2_2 = document.createElement("div");
	divEspacio2_2.className = "espacio2_2";
	
	divTablero.appendChild(divEspacio0_0);
	divTablero.appendChild(divEspacio0_1);
	divTablero.appendChild(divEspacio0_2);
	divTablero.appendChild(divEspacio1_0);
	divTablero.appendChild(divEspacio1_1);
	divTablero.appendChild(divEspacio1_2);
	divTablero.appendChild(divEspacio2_0);
	divTablero.appendChild(divEspacio2_1);
	divTablero.appendChild(divEspacio2_2);
	//Crear marcador
	var tablaMarcador = document.createElement("table");
	tablaMarcador.className = "marcador";
	var fila1 = document.createElement("tr");
	var fila2 = document.createElement("tr");
	var celdaTituloTabla = document.createElement("caption");
	var tituloTabla = document.createTextNode("Marcador");
	var celdaTituloX = document.createElement("th");
	var celdaTituloO = document.createElement("th");
	var titulo1tabla = document.createTextNode("X");
	var titulo2Tabla = document.createTextNode("O");
	var dato1 = document.createElement("td");
	var dato2 = document.createElement("td");
	var puntajeX = document.createTextNode(0);
	var puntajeO = document.createTextNode(0);

	celdaTituloTabla.appendChild(tituloTabla);
	celdaTituloX.appendChild(titulo1tabla);
	celdaTituloO.appendChild(titulo2Tabla);
	fila1.appendChild(celdaTituloX);
	fila1.appendChild(celdaTituloO);
	dato1.appendChild(puntajeX);
	dato2.appendChild(puntajeO);
	fila2.appendChild(dato1);
	fila2.appendChild(dato2);
	tablaMarcador.appendChild(celdaTituloTabla);
	tablaMarcador.appendChild(fila1);
	tablaMarcador.appendChild(fila2);
	divTablero.appendChild(tablaMarcador);

	function ponerFigura(espacio, x, y){
		if (state.listaTotito[x][y] == 0){
			if (state.esTurnoX == true){
				espacio.innerHTML = "X";
				state.listaTotito[x][y] = 1;
				console.log("X =", state.listaTotito[x][y]);
				state.esTurnoX = false;
			} else {
				espacio.innerHTML = "O";
				state.listaTotito[x][y] = -1;
				console.log("O =", state.listaTotito[x][y]);
				state.esTurnoX = true;
			}
		}

		var btnAgain = document.createElement("button");
		btnAgain.className = "again";
		var nombrebtn = document.createTextNode("Again");
		btnAgain.appendChild(nombrebtn);
		btnAgain.onclick = function(){
			if (ganador() == 1){
					marcador("X");
				} else if (ganador() == 2){
					marcador("O");
				}
			console.log("Aqui vamos de nuevo");
			state.esTurnoX = true;
			for (var x = 0; x <= 2; x++){
				for (var y = 0; y <= 2; y++){
					state.listaTotito[x][y] = 0;
				}
			}
			divEspacio0_0.innerHTML = "";
			divEspacio0_1.innerHTML = "";
			divEspacio0_2.innerHTML = "";
			divEspacio1_0.innerHTML = "";
			divEspacio1_1.innerHTML = "";
			divEspacio1_2.innerHTML = "";
			divEspacio2_0.innerHTML = "";
			divEspacio2_1.innerHTML = "";
			divEspacio2_2.innerHTML = "";
			posicion.removeChild(btnAgain);
		}


		if (ganador() != 0){
			if (ganador() == 3){
				console.log("Empate");
				posicion.appendChild(btnAgain);
			} else {
				divEspacio0_0.innerHTML = "Y";
				divEspacio0_1.innerHTML = "O";
				divEspacio0_2.innerHTML = "U";
				divEspacio1_0.innerHTML = "W";
				divEspacio1_1.innerHTML = "I";
				divEspacio1_2.innerHTML = "N";
				divEspacio2_0.innerHTML = " ";
				divEspacio2_2.innerHTML = " ";
				if (ganador() == 1){
					console.log("Ganador: X");
					divEspacio2_1.innerHTML = "X";
				} else if (ganador() == 2){
					console.log("Ganador: O");
					divEspacio2_1.innerHTML = "O";
				}
				posicion.appendChild(btnAgain);
			}
		}
	}

	function ganador(){
		var sumaDeLinea = [];
		//	Para las filas
		for (var f = 0; f <= 2; f++){sumaDeLinea.push((state.listaTotito[f][0] + state.listaTotito[f][1] + state.listaTotito[f][2]));}
		//	Para las columnas
		for (var c = 0; c <= 2; c++){sumaDeLinea.push((state.listaTotito[0][c] + state.listaTotito[1][c] + state.listaTotito[2][c]));}
		//	Para las diagonales
		var sumaDiagonal1 = 0;
		var sumaDiagonal2 = 0;
		for (var d = 0; d <= 2; d++){
			sumaDiagonal1 += state.listaTotito[d][d];
			sumaDiagonal2 += state.listaTotito[d][2 - d];
		}
		sumaDeLinea.push(sumaDiagonal1);
		sumaDeLinea.push(sumaDiagonal2);

		//	Verificacion de ganador
		if (sumaDeLinea.indexOf(3) != -1){
			return 1;
		} else if (sumaDeLinea.indexOf(-3) != -1){
			return 2;
		} else {
			if (sumaDeLinea.includes(0)){
				return 0;
			} else {
				return 3;
			}
		}
	}

	function marcador(jugador){
		if (jugador == "X"){
			var puntosX = parseInt(dato1.innerHTML);
			puntosX += 1;
			dato1.innerHTML = puntosX;
		} else if (jugador == "O"){
			var puntosO = parseInt(dato2.innerHTML);
			puntosO += 1;
			dato2.innerHTML = puntosO;
		}
	}

	if (ganador() == 0){
		divEspacio0_0.onclick = function(){ponerFigura(divEspacio0_0, 0, 0);}
		divEspacio0_1.onclick = function(){ponerFigura(divEspacio0_1, 0, 1);}
		divEspacio0_2.onclick = function(){ponerFigura(divEspacio0_2, 0, 2);}
		divEspacio1_0.onclick = function(){ponerFigura(divEspacio1_0, 1, 0);}
		divEspacio1_1.onclick = function(){ponerFigura(divEspacio1_1, 1, 1);}
		divEspacio1_2.onclick = function(){ponerFigura(divEspacio1_2, 1, 2);}
		divEspacio2_0.onclick = function(){ponerFigura(divEspacio2_0, 2, 0);}
		divEspacio2_1.onclick = function(){ponerFigura(divEspacio2_1, 2, 1);}
		divEspacio2_2.onclick = function(){ponerFigura(divEspacio2_2, 2, 2);}
		return divTablero;
	}
}

function render(posicion, componente, state){
	posicion.innerHTML = "";
	posicion.appendChild(componente(state, posicion));
}

var bodyTop = document.getElementById("top");
bodyTop.innerHTML = " ";
var tituloPagina = document.createElement("h1");
tituloPagina.className = "tituloPagina";
tituloPagina.innerHTML = "TOTITO";
bodyTop.appendChild(tituloPagina);

var lugar = document.getElementById("middle");
var totito = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
var turno = true;
render(lugar, tablero, {listaTotito: totito, esTurnoX: turno});