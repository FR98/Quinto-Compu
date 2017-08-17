var readline = require('readline-sync');

function agregar(lista, elemento){
	var lista_n = lista.slice();
	lista_n[lista.length] = elemento;
	return lista_n;
}

function voltear(lista){
	return lista.reverse();
}

function ordenar(lista){
	return lista.sort(function(a, b){return a - b;});
}

lista1 = [2, 3, 1, 6, 8, 10]
var elemento = parseInt(readline.question("Ingrese un numero: "));
lista_nueva = agregar(lista1, elemento);
console.log("La lista nueva con el nuevo elemento es: ", lista_nueva);
console.log("La lista anterior es: ", lista1);
console.log("La lista volteada es: ", voltear(lista_nueva));
console.log("La lista ordenada es: ", ordenar(lista_nueva));