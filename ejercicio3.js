/*
Ejercio n 3
Dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella.
La frase  y la palabra deben ser  parametros de una función.
*/

function contarOcurrencias(palabra, frase) {
    // Dividir la frase en un array de palabras
    var palabras = frase.split(' '); // Si separamos las comillas separa en palabras
    console.log(palabras);
    
    // Inicializar contador de ocurrencias
    var contador = 0;
    
    // Recorrer cada palabra
    palabras.forEach(function(palabraFrase) {
        // Comparar palabras (ignorando mayúsculas/minúsculas)
        if (palabraFrase.toLowerCase() === palabra.toLowerCase()) {
            // Aumentar contador si hay coincidencia
            contador++;
        }
    });
    
    // Devolver el contador de ocurrencias
    return contador;
}


var frase = "La vida es bella, pero a veces también es dura.";
var palabra = "es";
var ocurrencias = contarOcurrencias(palabra, frase);
console.log("La palabra '" + palabra + "' aparece " + ocurrencias + " veces en la frase.");
