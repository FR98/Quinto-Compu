var inNumeroNuevo = document.getElementById("numeroNuevo");
var botonIngresar = document.getElementById("ingresar");
var parrafo = document.getElementById("parrafo");
var listaNumeros = [];
var botonHistograma = document.getElementById("histograma");
var rango0 = 0;
var rango1 = 0;
var rango2 = 0;
var rango3 = 0;
var rango4 = 0;
var rango5 = 0;
var rango6 = 0;
var rango7 = 0;
var rango8 = 0;
var rango9 = 0;

botonIngresar.onclick = function() {
	if (inNumeroNuevo.value <= 100 && inNumeroNuevo.value >=0) {
		listaNumeros.push(inNumeroNuevo.value);
		parrafo.innerHTML = listaNumeros;
	}
	else{
		window.alert("Ingrese un numero de 0 a 100");
	}
	inNumeroNuevo.value = "";
}

inNumeroNuevo.onkeypress = function(f) {
	if (f.which == 13) {
		if (inNumeroNuevo.value <= 100 && inNumeroNuevo.value >=0) {
			listaNumeros.push(inNumeroNuevo.value);
			parrafo.innerHTML = listaNumeros;
		}
		else{
			window.alert("Ingrese un numero de 0 a 100");
		}
		inNumeroNuevo.value = "";	
	}
}

botonHistograma.onclick = function() {
	for (i = 0; i < listaNumeros.length; i++) {
		if (listaNumeros[i] >= 0 && listaNumeros[i] <= 10){rango0 += 10;}
		if (listaNumeros[i] >= 11 && listaNumeros[i] <= 20){rango1 += 10;}
		if (listaNumeros[i] >= 21 && listaNumeros[i] <= 30){rango2 += 10;}
		if (listaNumeros[i] >= 31 && listaNumeros[i] <= 40){rango3 += 10;}
		if (listaNumeros[i] >= 41 && listaNumeros[i] <= 50){rango4 += 10;}
		if (listaNumeros[i] >= 51 && listaNumeros[i] <= 60){rango5 += 10;}
		if (listaNumeros[i] >= 61 && listaNumeros[i] <= 70){rango6 += 10;}
		if (listaNumeros[i] >= 71 && listaNumeros[i] <= 80){rango7 += 10;}
		if (listaNumeros[i] >= 81 && listaNumeros[i] <= 90){rango8 += 10;}
		if (listaNumeros[i] >= 91 && listaNumeros[i] <= 100){rango9 += 10;}
	}
	
	var barra = document.createElement("div");
	barra.style.background = "blue";
	barra.style.height = "25px";
	barra.style.margin = "5px";
	barra.style.width = rango0 + "px";
	document.body.appendChild(barra);

	var barra = document.createElement("div");
	barra.style.background = "black";
	barra.style.height = "25px";
	barra.style.margin = "5px";
	barra.style.width = rango1 + "px";
	document.body.appendChild(barra);

	var barra = document.createElement("div");
	barra.style.background = "red";
	barra.style.height = "25px";
	barra.style.margin = "5px";
	barra.style.width = rango2 + "px";
	document.body.appendChild(barra);

	var barra = document.createElement("div");
	barra.style.background = "grey";
	barra.style.height = "25px";
	barra.style.margin = "5px";
	barra.style.width = rango3 + "px";
	document.body.appendChild(barra);

	var barra = document.createElement("div");
	barra.style.background = "green";
	barra.style.height = "25px";
	barra.style.margin = "5px";
	barra.style.width = rango4 + "px";
	document.body.appendChild(barra);

	var barra = document.createElement("div");
	barra.style.background = "yellow";
	barra.style.height = "25px";
	barra.style.margin = "5px";
	barra.style.width = rango5 + "px";
	document.body.appendChild(barra);

	var barra = document.createElement("div");
	barra.style.background = "brown";
	barra.style.height = "25px";
	barra.style.margin = "5px";
	barra.style.width = rango6 + "px";
	document.body.appendChild(barra);

	var barra = document.createElement("div");
	barra.style.background = "orange";
	barra.style.height = "25px";
	barra.style.margin = "5px";
	barra.style.width = rango7 + "px";
	document.body.appendChild(barra);

	var barra = document.createElement("div");
	barra.style.background = "purple";
	barra.style.height = "25px";
	barra.style.margin = "5px";
	barra.style.width = rango8 + "px";
	document.body.appendChild(barra);

	var barra = document.createElement("div");
	barra.style.background = "pink";
	barra.style.height = "25px";
	barra.style.margin = "5px";
	barra.style.width = rango9 + "px";
	document.body.appendChild(barra);
}