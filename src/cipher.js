
let cifrar=document.getElementById("botoncifrar");
let decifrar=document.getElementById("botondescifrar");

let cipher = {

   cipher: (string,incremento) => {
   let longitud = string.length;
   let inicio = 0;
     while (inicio  < longitud)
     { 
        console.log(string);
        console.log(incremento);
     
        let x = string.charCodeAt(inicio); //Obtiene el codigo ascii de la letra  
        let formula = (x -65+parseInt(incremento))%26+65; //formula laboratoria
        console.log(x);
        let letracodificada = String.fromCharCode(formula); //sustitución por la variable introducida
      
        document.getElementById("mensajecodificado").innerHTML += letracodificada; //imprime la letra codificada a partir del codigo ascii 
        //console.log(letracodificada);

        inicio++;

     }
    
   },
   //función decipher
   decipher: (string,incremento) => {
     
      let longitud = string.length;
      let inicio = 0;
        while (inicio  < longitud)
        { 
    
           let x = string.charCodeAt(inicio); //Obtiene el codigo ascii de la letra 

           let formula = (x+65-parseInt(incremento))%26+65; //formula laboratoria
           console.log(formula);
           let resultado =parseInt(formula);
console.log(resultado);
           let letracodificada = String.fromCharCode(resultado+26); //sustitución por la variable introducida
            if (letracodificada==="["){
               document.getElementById("mensajedecodificado").innerHTML += "A";
            } else {
               document.getElementById("mensajedecodificado").innerHTML += letracodificada; //imprime la letra codificada a partir del codigo ascii 
            }
            

           
           inicio++;
        }
      },
    NumText: (string) => {
          let out = '';
          //Se añaden las letras validas
          let filtro = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';//Caracteres validos
        
          for (let i=0; i<string.length; i++)
             if (filtro.indexOf(string.charAt(i)) != -1) 
              out += string.charAt(i);
          return out;
       }
};
let ciphervalues= () => {
    
 
   let incremento=document.getElementById("incremento").value;
   let string=document.getElementById("string").value;
 cipher.cipher(string,incremento);
   
   };
let deciphervalues= () => {
   let incremento=document.getElementById("incremento1").value;
   let string=document.getElementById("string1").value;
   cipher.decipher(string,incremento);
   };

if (cifrar){
   cifrar.addEventListener("click", ciphervalues);

}

if(decifrar){
   decifrar.addEventListener("click", deciphervalues);
}
