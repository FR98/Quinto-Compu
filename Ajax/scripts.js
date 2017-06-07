var botonAhora = document.getElementById("botonAhora");
var preResultado = document.getElementById("resultado");

botonAhora.onclick = function() {
	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://reqres.in/api/products/1');

	xhr.onload = function() {
		if (xhr.status === 200) {
			preResultado.innerHTML = xhr.responseText;
		}
		else{
			alert('Request failed. Returned status of ' + xhr.status);
		}
	}
	xhr.send();
}