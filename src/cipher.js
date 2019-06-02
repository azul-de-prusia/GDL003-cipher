//cipher
function cipher(string,incremento){

var longitud = string.length;
var inicio = 0;
  while (inicio  < longitud)
  { 
     //console.log(inicio);
     var x = string.charCodeAt(inicio); //Obtiene el codigo ascii de la letra  
     var formula = (x -65+incremento)%26+65; //formula laboratoria
     var letracodificada = String.fromCharCode(formula);

     document.getElementById("mensajecodificado").innerHTML += letracodificada //imprime la letra codificada a partir del codigo ascii 
     //imprimir(letracodificada);
     inicio++;
  }
}
