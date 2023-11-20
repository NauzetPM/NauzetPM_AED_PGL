const DOM={
    inputTabla:document.getElementById("inputTabla"),
    divResultado: document.getElementById("resultado")
}

let elnum1=document.getElementById("num1");
let elnum2=document.getElementById("num2");
let eloperador=document.getElementById("operador");
let Resultado= document.querySelector(".resultado");

function calcular() {
Resultado.innerHTML="";
let num1=elnum1.value;
let num2=elnum2.value;
let operador=eloperador.value;
switch(operador){
    case "+":
        let resultado=Number(num1)+Number(num2);
        Resultado.append(resultado);
        break;
    case "-":
        let resultado1=Number(num1)-Number(num2);
        Resultado.append(resultado1);
        break;
    case "*":
        let resultado2=Number(num1)*Number(num2);
        Resultado.append(resultado2);
        break;
    case "/":
        let resultado3=Number(num1)/Number(num2);
        Resultado.append(resultado3);
        break;
}
}

