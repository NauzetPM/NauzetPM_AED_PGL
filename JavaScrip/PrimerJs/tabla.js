const DOM={
    inputTabla:document.getElementById("inputTabla"),
    divResultado: document.getElementById("resultado")
}

let elinputTabla=document.getElementById("inputTabla");
let tableResultado= document.querySelector(".resultado");

function calcularTabla() {
tableResultado.innerHTML="";
//DOM.inputTabla.value;
let tabla=elinputTabla.value;


for (let i = 1; i <= 10; i++) {
    let elTd=document.createElement("td");
    let elTr=document.createElement("tr");
    elTr.appendChild(elTd);
    tableResultado.appendChild(elTr);
    elTd.innerText=tabla+"*"+i+"="+tabla*i;
}
}

