//cipher
function cipher(string,incremento){

var longitud = string.length;
var inicio = 0;

  while (inicio  < longitud)
  {
     var x = string.charCodeAt(inicio);
     var formula = (x -65+incremento)%26+65;
     console.log(String.fromCharCode(formula));
    inicio++;
  }



}
cipher ("GALIMATAZO", 4);