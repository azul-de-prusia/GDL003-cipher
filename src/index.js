
let grafica=document.getElementById("grafica");
let pintura=document.getElementById("pintura");
let encode=document.getElementById("botoncifrar");
let decode=document.getElementById("botondescifrar");
let inicio=document.getElementById("galeria2"); 
let index=document.getElementById("boton");
let index2=document.getElementById("boton2");

let muestragrafica= () => {
    
    document.getElementById('div6').style.display = 'block';
    document.getElementById('div7').style.display = 'none';
    document.getElementById('inicio').style.display = 'none';

};

let muestrapintura= () => {
	
    document.getElementById('div6').style.display = 'none';
    document.getElementById('div7').style.display = 'block';
    document.getElementById('inicio').style.display = 'none';
 
};

//mostrar y ocultar encode
let showEncode= () => {
    
    document.getElementById('div2').style.display = 'none';
    document.getElementById('div4').style.display = 'block';
    document.getElementById('div5').style.display = 'none';
    
    };
let showDecode= () => {
//mostrar y ocultar decode  
        let div2 = document.getElementById("div2");
        div2.style.display = "none";
      
        let div4 = document.getElementById("div4");
        div4.style.display = "none";

        let div5 = document.getElementById("div5");
        div5.style.display = "block";
       
    };
            
    let cambiohtml= () => {
        //dirige a otra html  
                
               location.href='inicio.html'
               
            };
    let cambio1html1= () => {
             //dirige a la primera html  
                        
                location.href='index.html'
                       
            };
    let cambiohtml2= () => {
            //dirige a la primera html  
                                   
                location.href='index.html'
                                  
            };
        
    if (inicio){
        inicio.addEventListener("click", cambiohtml);
    }
    if (index){
        index.addEventListener("click", cambio1html1);
    }
    if (index2){
        index2.addEventListener("click", cambiohtml2);
    }
    if (grafica){
        grafica.addEventListener("click", muestragrafica);
    }
    if(pintura){
        pintura.addEventListener("click", muestrapintura);
    }
    
    if(encode){
        encode.addEventListener("click", showEncode);
    }
    if(decode){
        decode.addEventListener("click", showDecode);
    }

