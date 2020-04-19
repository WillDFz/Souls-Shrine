var live_stream = "http://cassini.shoutca.st:10090/;";
var myaudio = new Audio(live_stream);
var play_button = document.getElementById("play-button");
//var volume_control = document.getElementById("volume_bar");
var cont = 5;
//document.getElementById('upVolume').addEventListener("click", upVolume);
//document.getElementById('downVolume').addEventListener("click", lowVolume);

function PlayAudio() {
    if (myaudio.paused || myaudio.muted) {
        myaudio.setAttribute('src', live_stream)
        myaudio.play()
    } else {
        myaudio.pause();
        myaudio.setAttribute('src', "")
    }
}

function toggleButton(t) {
    if (myaudio.paused || myaudio.muted) {
        t.innerHTML = "Play"
    } else {
        t.innerHTML = "Stop"
    }
}

/*function setInitialVolume() {
    myaudio.volume = cont * 0.1;
    for (let i = 1; i <= 5; i++) {
        let barra = document.getElementById("bar" + i);
        barra.style.backgroundColor = "#f95af9"
    }
}

function setVolume() {
    myaudio.volume = cont * 0.1
}

function upVolume() {
    let acm = cont + 1;
    if (acm <= 10) {
        let barra = document.getElementById("bar" + acm);
        barra.style.backgroundColor = "#f95af9";
        cont = cont + 1;
        setVolume()
    }
}

function lowVolume() {
    let acm = cont;
    if (cont >= 1) {
        let barra = document.getElementById("bar" + acm);
        barra.style.backgroundColor = "#953695";
        cont = cont - 1;
        setVolume()
    }
}*/
setInterval(function rld() {
    var d = new Date();
    document.getElementById("artwork").src = "http://cyberesistance.xyz/media/cover/artwork.png?a=" + d.getTime()
}, 40000)