// Variaveis

//////////// Inventario ///////////
// Botao abrir invetario
const inventoryButton = document.getElementById('inventoryButton');
// Inventario Container
const inventoryContainer = document.getElementById('inventoryContainer');
// Botao fechar inventario
const closeInventoryButton = document.querySelector('.close-inventory-btn');

//////////// Recent Tracks ///////////
// Botao abrir Recent Tracks
const tracksButton = document.getElementById('tracksButton');
// Recent Tracks Container
const tracksContainer = document.getElementById('tracksContainer');
// Botao fechar Recent Tracks
const closeTracksButton = document.querySelector('.close-tracks-btn');

//////////// About ///////////
// Botao abrir Recent Tracks
const aboutButton = document.getElementById('aboutButton');
// Recent Tracks Container
const aboutContainer = document.getElementById('aboutContainer');
// Botao fechar Recent Tracks
const closeAboutButton = document.querySelector('.close-about-btn');

//////////// Game ///////////
// Botao abrir Game
const gameButton = document.getElementById('gameButton');
// Recent Game Container
const gameContainer = document.getElementById('gameContainer');
// Botao fechar Game
const closeGameButton = document.querySelector('.close-game-btn');

//////////// Portal ///////////
// Botao abrir Portal
const openPortalButton = document.getElementById('openPortalButton');
// Portal Container
const portal = document.getElementById('portalButton');




// Events
///// Inventario //////
inventoryButton.addEventListener("click", openInventory);
closeInventoryButton.addEventListener("click", closeInventory);
///// Recent Tracks ////
tracksButton.addEventListener("click", openRecentTracks);
closeTracksButton.addEventListener("click", closeRecentTracks);
///// Recent Tracks ////
aboutButton.addEventListener("click", openAbout);
closeAboutButton.addEventListener("click", closeAbout);

///// Recent Tracks /////
gameButton.addEventListener("click", openGame);
closeGameButton.addEventListener("click", closeGame);


///// Portal ////
openPortalButton.addEventListener("click", openPortal);


// Funcoes
function openInventory() {
    inventoryContainer.style.display = "block";
}

function closeInventory() {
    inventoryContainer.style.display = "none";
}

function openGame() {
    gameContainer.style.display = "block";
}

function closeGame() {
    gameContainer.style.display = "none";
}



function openRecentTracks() {
    tracksContainer.style.display = "block";
}

function closeRecentTracks() {
    tracksContainer.style.display = "none";
}

function openAbout() {
    aboutContainer.style.display = "block";
}

function closeAbout() {
    aboutContainer.style.display = "none";
}

function openPortal() {
    if (portal.style.display == "none") {
        portal.style.display = "block";
    } else {
        portal.style.display = "none";
    }

}

/*document.getElementById('minimize_btn').addEventListener("click", minimize);



document.getElementById('rs_btn').addEventListener("click", openDeep);

function minimize() {
    document.getElementById("player_window").style.display = "none";
    document.getElementById("minimized_window").style.display = "block";
    document.getElementById("community_button").style.display = "none";
}

function maximize() {
    document.getElementById("player_window").style.display = "block";
    document.getElementById("minimized_window").style.display = "none";
    document.getElementById("community_button").style.display = "block";
    typeWriter();
}

function open_stt() {
    document.getElementById("setting_window").style.display = "block";
}

function close_stt() {
    document.getElementById("setting_window").style.display = "none";
}

function open_abt() {
    document.getElementById("abt_window").style.display = "block";
}

function close_abt() {
    document.getElementById("abt_window").style.display = "none";
}

function open_track() {
    document.getElementById("trk_window").style.display = "block";
}

function close_track() {
    document.getElementById("trk_window").style.display = "none";
}
*/