var readline = require('readline-sync');

var personas = [
    {nombre: "Ana", apellido: "Caballeros", direccion:{pais: "Guatemala", ciudad: "Guatemala"}, edad: 17, altura: 170},
    {nombre: "Willi", apellido: "Rosal", direccion:{pais: "Guatemala", ciudad: "Guatemala"}, edad: 18, altura: 185},
    {nombre: "Richi" , apellido: "Juarez", direccion:{ pais: "Guatemala", ciudad: "Guatemala"}, edad: 18, altura: 165},
    {nombre: "Douma" , apellido: "Douma", direccion:{ pais: "Guatemala", ciudad: "Guatemala"}, edad: 16, altura: 170},
]

function bubbleSort(lista_personas, ordenarPor){
    var cambio;
    do{
        cambio = false;
        for (var i = 0; i < lista_personas.length-1; i++){
            if (lista_personas[i][ordenarPor]>lista_personas[i+1][ordenarPor]){
                var menor = lista_personas[i];
                lista_personas[i] = lista_personas[i+1];
                lista_personas[i+1] = menor;
                cambio = true;}
        }   
    }
    while(cambio);
}

var ordenarPor = readline.question("Ordenar por: ");
bubbleSort(personas, ordenarPor);
console.log(personas);