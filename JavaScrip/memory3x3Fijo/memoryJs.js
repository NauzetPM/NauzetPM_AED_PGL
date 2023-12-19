const DOM = {
    principal: document.querySelector(".principal"),
    celdas: document.querySelectorAll(".celda"),
    solucion: document.querySelector("solucion"),
}

let intentos;
let celda;
let posible = true;
let secreto;

rellenar();

function rellenar() {
    limpiar();
    let numeros = [];

    for (let i = 0; i < DOM.celdas.length / 2;) {
        let numAleatorio = Math.floor(Math.random() * 99) + 1;

        if (numeros.length == 0 || !numeros.includes(numAleatorio)) {
            numeros.push(numAleatorio);
            numeros.push(numAleatorio);
            i++;
        }

    }

    numeros = numeros.sort(function () { return Math.random() - 0.5 });

    for (let i = 0; i < DOM.celdas.length; i++) {
        DOM.celdas[i].firstElementChild.innerHTML = numeros[i];
        DOM.celdas[i].classList.remove("invisible");
        DOM.celdas[i].classList.add("visible");
    }

    secreto = numeros[0]; 
}

function mostrar(num) {

    if (posible == true){
        DOM.celdas[num - 1].firstElementChild.classList.remove("invisible");
        DOM.celdas[num - 1].firstElementChild.classList.add("visible");
    
        if(celda == null){
            celda = DOM.celdas[num - 1];
            posible = true;
        }else{
            posible = false;
            setTimeout(() => {
                limpiar(); 
                posible = true;
                intentos++;
            }, 1000) 
            
            if(DOM.celdas[num - 1].firstElementChild.innerHTML == celda.firstElementChild.innerHTML){
                DOM.celdas[num - 1].classList.remove("visible");
                DOM.celdas[num - 1].classList.add("invisible");
                celda.classList.remove("visible");
                celda.classList.add("invisible");
            }
        }
    }
}
  

function limpiar(){
    for (let i = 0; i < DOM.celdas.length; i++) {
        DOM.celdas[i].firstElementChild.classList.remove("visible");
        DOM.celdas[i].firstElementChild.classList.add("invisible");
    }
    celda = null;
}