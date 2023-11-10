let tabella = document.querySelector('#tabella');
let randomBtn = document.querySelector('#randomBtn');
let tabellaGiocatore = document.querySelector('#tabellaGiocatore');



let numeriEstratti = [];

creaTabellaGiocatore();

function creaTabellaGiocatore() {
    for (let i = 1; i <= 24; i++) {
        let numeroCasella = generaNumeroUnico();
        
        let casella = document.createElement('div');
        casella.className = "numeriGiocatore";
        casella.innerText = numeroCasella;
        tabellaGiocatore.appendChild(casella);
    }
}

function generaNumeroUnico() {
    let numeroCasella = Math.floor(Math.random() * 76) + 1;
    
    while (numeriEstratti.includes(numeroCasella)) {
        numeroCasella = Math.floor(Math.random() * 76) + 1;
    }
    
    numeriEstratti.push(numeroCasella);
    
    return numeroCasella;
}


creaTabella();
function creaTabella(){
    for(i=1; i<=76; i++){
        let casella = document.createElement('div');
        casella.className = "numeri";
        casella.innerText = [i];
        tabella.appendChild(casella);
    }
}

let casella = document.querySelectorAll('.numeri');    
let casellaGiocatore = document.querySelectorAll('.numeriGiocatore');


let numeriGenerati = [];

randomBtn.addEventListener('click', function selezionaNumero() {
    let getNumber = undefined;

    do {
        getNumber = Math.floor(Math.random() * 76) + 1;
    } while (numeriGenerati.includes(getNumber));

    numeriGenerati.push(getNumber);
    
    for (let i = 0; i < casella.length; i++) {
        if (parseInt(casella[i].innerText) === getNumber) {
            casella[i].style.backgroundColor = '#982289';
            
        }
    }

    for (let i = 0; i < casellaGiocatore.length; i++) {
        if (parseInt(casellaGiocatore[i].innerText) === getNumber) {
            casellaGiocatore[i].style.backgroundColor = '#982289';
        }
    }

    console.log(casellaGiocatore);
}, 

);

console.log(numeriGenerati);







