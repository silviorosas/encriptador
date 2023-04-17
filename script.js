

function encriptar() {
  
var frase= document.getElementById("textEncriptado").value.toLowerCase();
  
var textoEncriptado=frase.replace(/e/img,"enter");
var textoEncriptado=textoEncriptado.replace(/o/img,"ober");
var textoEncriptado=textoEncriptado.replace(/i/img,"imes");
var textoEncriptado=textoEncriptado.replace(/a/img,"ai");
var textoEncriptado=textoEncriptado.replace(/u/img,"ufat");

 document.getElementById("textDesencriptado").innerHTML=textoEncriptado;
 document.getElementById("botonCopiar").style.display="show";
 document.getElementById("botonCopiar").style.display="inherit";
 ocultar()
 
}

function desencriptar() {
    var frase= document.getElementById("textEncriptado").value.toLowerCase();
     
    var textoEncriptado=frase.replace(/enter/img,"e");
    var textoEncriptado=textoEncriptado.replace(/ober/img,"o");
    var textoEncriptado=textoEncriptado.replace(/imes/img,"i");
    var textoEncriptado=textoEncriptado.replace(/ai/img,"a");
    var textoEncriptado=textoEncriptado.replace(/ufat/img,"u");
    
     document.getElementById("textDesencriptado").innerHTML=textoEncriptado;
    }

function copiar(){
    var contenido = document.querySelector("#textDesencriptado").textContent;
    navigator.clipboard.writeText(contenido)

}

var contenedorImagen = document.querySelector(".imagen");

function ocultar(){
contenedorImagen.classList.add("ocultar");
}