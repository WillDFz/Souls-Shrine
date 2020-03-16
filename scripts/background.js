const numeroDeBackgrounds = 15;
let backgroundSlots = [];
var backgroundImages = [];
var a = 5;




// Events
//var botaoInventario = document.getElementById('inventoryButton');
//botaoInventario.addEventListener("click", criaVetorImagens);

// Botao Random
var botaoRandom = document.getElementById('botaoRandom');
botaoRandom.addEventListener("click", randomBackground);



// Cria vetor de imagens

function criaVetorImagens() {
    for (let i = 1; i <= numeroDeBackgrounds; i++) {
        backgroundImages[i] = `media/backgrounds/${i}.gif`;

    }
}


// Background Aleatorio
function randomBackground() {
    let numeroRandomico = Math.floor(Math.random() * numeroDeBackgrounds) + 1;

    if (document.body) {
        document.body.background = backgroundImages[numeroRandomico];
    }
}


// Botoes Slot
let slot1 = document.querySelector(".gif-1");
let slot2 = document.querySelector(".gif-2");
let slot3 = document.querySelector(".gif-3");
let slot4 = document.querySelector(".gif-4");
let slot5 = document.querySelector(".gif-5");
let slot6 = document.querySelector(".gif-6");
let slot7 = document.querySelector(".gif-7");
let slot8 = document.querySelector(".gif-8");
let slot9 = document.querySelector(".gif-9");
let slot10 = document.querySelector(".gif-10");
let slot11 = document.querySelector(".gif-11");
let slot12 = document.querySelector(".gif-12");
let slot13 = document.querySelector(".gif-13");
let slot14 = document.querySelector(".gif-14");
let slot15 = document.querySelector(".gif-15");
// Events
slot1.addEventListener("click", slot1Click);
slot2.addEventListener("click", slot2Click);
slot3.addEventListener("click", slot3Click);
slot4.addEventListener("click", slot4Click);
slot5.addEventListener("click", slot5Click);
slot6.addEventListener("click", slot6Click);
slot7.addEventListener("click", slot7Click);
slot8.addEventListener("click", slot8Click);
slot9.addEventListener("click", slot9Click);
slot10.addEventListener("click", slot10Click);
slot11.addEventListener("click", slot11Click);
slot12.addEventListener("click", slot12Click);
slot13.addEventListener("click", slot13Click);
slot14.addEventListener("click", slot14Click);
slot15.addEventListener("click", slot15Click);


function slot1Click() {
    if (document.body) { document.body.background = backgroundImages[1]; }
}

function slot2Click() {
    if (document.body) { document.body.background = backgroundImages[2]; }
}

function slot3Click() {
    if (document.body) { document.body.background = backgroundImages[3]; }
}

function slot4Click() {
    if (document.body) { document.body.background = backgroundImages[4]; }
}

function slot5Click() {
    if (document.body) { document.body.background = backgroundImages[5]; }
}

function slot6Click() {
    if (document.body) { document.body.background = backgroundImages[6]; }
}

function slot7Click() {
    if (document.body) { document.body.background = backgroundImages[7]; }
}

function slot8Click() {
    if (document.body) { document.body.background = backgroundImages[8]; }
}

function slot9Click() {
    if (document.body) { document.body.background = backgroundImages[9]; }
}

function slot10Click() {
    if (document.body) { document.body.background = backgroundImages[10]; }
}

function slot11Click() {
    if (document.body) { document.body.background = backgroundImages[11]; }
}

function slot12Click() {
    if (document.body) { document.body.background = backgroundImages[12]; }
}

function slot13Click() {
    if (document.body) { document.body.background = backgroundImages[13]; }
}

function slot14Click() {
    if (document.body) { document.body.background = backgroundImages[14]; }
}

function slot15Click() {
    if (document.body) { document.body.background = backgroundImages[15]; }
}