'use strict'
// Variaveis
var back_image = [];
var a;
var displayBg = document.getElementById("background_n");
var author = document.getElementById('author');
var bgNum = 54;
var numeroDeBackgrounds = 15;

document.getElementById("random-bg-button").addEventListener("click", randomBg);




// Cria vetor de imagens
function setBg() {
    for (let i = 1; i <= bgNum; i++) {
        back_image[i] = "media/backgrounds/" + i + ".gif";
    }

}
// Background randomico
function randomBg() {
    a = Math.floor(Math.random() * bgNum) + 1;
    if (document.body) {
        updateBg(a);
    }
}

// Atualiza background
function updateBg(arg) {
    document.body.background = back_image[arg];
    if (arg >= 21 && arg <= 34) {
        author.innerHTML = "Author: " + "<a href='https://fauux.neocities.org' target='_blank' >Fauux NeoCities </a>";

    } else if (arg == 4) {
        author.innerHTML = "Author: " + "<a href='https://www.instagram.com/elobamesmo/?igshid=s0l3i1976w1' target='_blank'> elobamesmo </a> ";
    } else {
        author.innerHTML = "Author: ???";
    }
}