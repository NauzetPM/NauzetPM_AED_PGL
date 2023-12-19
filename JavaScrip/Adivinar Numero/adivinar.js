//let elnum=document.getElementById("num");
let Resultado= document.querySelector(".resultado");
let max=Number(10);
let secreto=null;
var valoresAceptados = /^[0-9]+$/;

function adivinar() {
    const DOM={
        input1: document.getElementById("num").value
    }
    Resultado.innerHTML="";
    if(secreto==null){
        generarNum();
    }
    
    //let num=elnum.value;
    let num=DOM.input1;
    

    if(num.match(valoresAceptados)){        //intento de solo permitir numeros
    
    if(num==secreto){         
        Resultado.innerHTML="Acertaste el numero era "+num;
    }else if(num>secreto){
        Resultado.innerHTML="El numero secreto <"+num;
    }else{
        Resultado.innerHTML="El numero secreto >"+num;
    }
    
    }else{
        Resultado.innerHTML="no valido el intento";
    }
   // Resultado.append("secreto es"+secreto);//Pruebas 

}

function generarNum() {
    secreto=parseInt(Math.random()*max+1);
}