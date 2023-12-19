const DOM = {
    principal: document.getElementById("principal"),
    tablero: document.getElementById("tablero"),
    solucion: document.querySelector("solucion"),
};

let intentos;
let celda;
let posible = true;
let secreto;

function rellenar(numeroCasillas) {
    limpiar();
    let numeros = [];

    for (let i = 0; i < numeroCasillas / 2;) {
        let numAleatorio = Math.floor(Math.random() * 99) + 1;

        if (numeros.length === 0 || !numeros.includes(numAleatorio)) {
            numeros.push(numAleatorio);
            numeros.push(numAleatorio);
            i++;
        }
    }
    if( numeroCasillas%2 != 0){
        let nuevoNumero = 0;
        do{
            nuevoNumero = Math.floor(Math.random()*99) + 1
        }while(numeros.includes(nuevoNumero));
        numeros.push = nuevoNumero;
    }


    numeros = numeros.sort(function () { return Math.random() - 0.5 });
    DOM.tablero.innerHTML = "";
    for (let i = 0; i < numeroCasillas; i++) {
        let casilla = document.createElement("div");
        casilla.classList.add("visible");
        casilla.addEventListener("click", ()=> mostrar(i));
        casilla.innerText = numeros[i];
        DOM.tablero.appendChild(casilla);
    }   

   
    
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