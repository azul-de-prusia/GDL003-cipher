//cipher
function cipher(string,incremento){
  
var longitud = string.length;
var inicio = 0;
  while (inicio  < longitud)
  { 
     //console.log(inicio);
     var x = string.charCodeAt(inicio); //Obtiene el codigo ascii de la letra  
     var formula = (x -65+incremento)%26+65; //formula laboratoria
     var letracodificada = String.fromCharCode(formula); //sustitución por la variable introducida
    
     document.getElementById("mensajecodificado").innerHTML += letracodificada //imprime la letra codificada a partir del codigo ascii 
     
     inicio++;
  }
  function decipher(string,incremento){
    var longitud = string.length;
    var inicio = 0; 
    while (inicio  < longitud)
 { 
    //console.log(inicio);
    var x = string.charCodeAt(inicio); //Obtiene el codigo ascii de la letra  
    var formula = (x -65-incremento)%26+65; //formula laboratoria
    var letracodificada = String.fromCharCode(formula); //sustitución por la variable introducida

    document.getElementById("mensajecodificado").innerHTML += letracodificada //imprime la letra codificada a partir del codigo ascii 
    
    inicio++;
 }
 var div2 = document.getElementById("div2")
 
 div2.style.display = "none"

 var div3 = document.getElementById("div3")
 
 div3.style.display = "block"
 
 var div4 = document.getElementById("div4")
 
 div2.style.display = "block"

 
}
  