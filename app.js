let numeroSecreto1 = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
   let elementoHTML = document.querySelector(elemento);
   elementoHTML.innerHTML = texto;
   return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    

    if(numeroDeUsuario === numeroSecreto1){
        asignarTextoElemento('p',`acertaste el numero en ${intentos} ${(intentos===1) ? 'vez':'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto1){
            asignarTextoElemento('p','el numero es meno');     
        }else{asignarTextoElemento('p','el numero es mayor'); 
        
    }
    intentos ++;
     limpiarCaja();
    }
     return;
}

function limpiarCaja() {
     document.querySelector('#valorUsuario').value='';
    
}


function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);

    if(listaNumeroSorteado.length == numeroMaximo){
       asignarTextoElemento('p','ya se sortearon todos los numeros posibles');
    }else{
         if (listaNumeroSorteado.includes(numeroGenerado)) {
          return generarNumeroSecreto();
        }else{
           listaNumeroSorteado.push(numeroGenerado);
           return numeroGenerado;
        }
     }
}

function condicionesIniciales(){
asignarTextoElemento('h1','juego del numero secreto actualizado');
asignarTextoElemento('p',`dame un numero del 1 al ${numeroMaximo}`);
numeroSecreto1 = generarNumeroSecreto();
intentos = 1;    
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales()
