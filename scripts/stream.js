var live_stream = "http://cassini.shoutca.st:10090/;";
var myaudio = new Audio(live_stream);
var play_button = document.getElementById("play-button");
var cont = 3;
document.getElementById('volumeUp').addEventListener("click", upVolume);
document.getElementById('volumeDown').addEventListener("click", lowVolume);

window.addEventListener("load", setInitialVolume);

function PlayAudio(button) {
    if (myaudio.paused || myaudio.muted) {
        myaudio.setAttribute('src', live_stream);
        button.innerHTML = "Stop";
        myaudio.play();
    } else {
        myaudio.pause();
        myaudio.setAttribute('src', "");
        button.innerHTML = "Play";
    }
}

function setInitialVolume() {
    myaudio.volume = cont * 0.1;
    for (let i = 1; i <= 3; i++) {
        let barra = document.getElementById(`bar${i}`);
        barra.style.backgroundColor = "#f3db1f"
    }
}

function setVolume() {
    myaudio.volume = cont * 0.1
}

function upVolume() {
    let acm = cont + 1;
    if (acm <= 6) {
        let barra = document.getElementById(`bar${acm}`);
        barra.style.backgroundColor = "#f3db1f";
        cont += 1;
        setVolume();
    }
}

function lowVolume() {
    let acm = cont;
    if (cont >= 1) {
        let barra = document.getElementById(`bar${acm}`);
        barra.style.backgroundColor = "#8c7d07";
        cont -= 1;
        setVolume();
    }
}
setInterval(function reloadArtwork() {
    var d = new Date();
    document.getElementById("artwork").src = "http://cyberesistance.xyz/media/cover/artwork.png?a=" + d.getTime()
}, 40000)