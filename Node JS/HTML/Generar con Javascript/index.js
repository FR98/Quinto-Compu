function cuadradoCirculo(state){
	//Creo el titulo
	var h1Titulo = document.createElement("h1");
	var titulo = document.createTextNode(state.text);
	h1Titulo.appendChild(titulo);

	//Creo el cuadrado
	var divCuadrado = document.createElement("div");
	divCuadrado.className = "cuadrado";

	//Crear el circulo
	var divCirculo = document.createElement("div");
	divCirculo.className = "circulo";
	divCirculo.style.left = state.x + "px";
	divCirculo.style.top = state.y + "px";
	divCirculo.style.backgroundColor = state.color;
	divCirculo.style.height = state.size;
	divCirculo.style.width = state.size;

	//Agregar el circulo al cuadrado
	divCuadrado.appendChild(divCirculo);

	//Crear un elemento base
	var app = document.createElement("div");
	app.className = "app";

	//Agregar titulo y cuadrado al elemento base
	app.appendChild(h1Titulo);
	app.appendChild(divCuadrado);

	return app;
}

function render(mountPoint, component, state){
	mountPoint.innerHTML = " ";
	mountPoint.appendChild(component(state));
}

//Obtener la interfaz y "montarla" en el div con id
var root = document.getElementById("root");

var i = 0;

var btnNext = document.getElementById("next");
btnNext.onclick = function(){
	render(root, cuadradoCirculo, {
		x: i % 800,
		y: 100 * Math.sin(i * Math.PI / 200) + 100,
		color: "purple",
		size: 30,
		text: "Bienvenido"
	});

	i += 3;
}