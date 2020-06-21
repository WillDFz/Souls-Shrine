var stage = document.getElementById("stage");
var ctx = stage.getContext("2d");
var person = new Image();
var bg = new Image();

var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();



person.src = "games/assets/dragon.png";
bg.src = "games/assets/background.png";
fg.src = "games/assets/floor.png";
pipeNorth.src = "games/assets/pipeNorth.png";
pipeSouth.src = "games/assets/pipeSouth.png";


var continua = true;
var gap = 125;
var content;
var bx = 10;
var by = 150;
var gravity = 1.25;
var gravity_backup = gravity;
var score = 0;


//barreiras
var pipe = [];

pipe[0] = {
        x: stage.width,
        y: 0
    }
    //pulo
document.addEventListener("keydown", moveUp);


// Jogar
playGameButton = document.getElementById("playGameButton");
playGameButton.addEventListener("click", begin);
// jogar novamente
btn_again = document.getElementById("btn_again");
btn_again.addEventListener("click", play_again);

// Troca de valor botao






function moveUp() {
    gravity = -7;

    setTimeout(function() {
        gravity = gravity_backup;
    }, 80);
}

function play_again() {
    continua = true;
    score = 0;
    gravity = gravity_backup;
    by = 150;
    document.getElementById("pontos_detail").innerText = score;
    document.getElementById("game_over").style = "display:none;";
    pipe = [];
    pipe[0] = {
        x: stage.width,
        y: 0
    }
}

function game_over() {
    continua = false;
    document.getElementById("pontos_detail").innerText = score;
    document.getElementById("game_over").style = "block";
    gravity = 0;

}

function draw() {
    ctx.drawImage(bg, 0, 0);

    //console.log(pipe.length);
    //gerar barreiras 
    for (var i = 0; i < pipe.length; i++) {
        //console.log(i);
        constant = pipeNorth.height + gap;
        ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant);

        //faz a barreira ir para tras 288 512
        pipe[i].x--;
        if (pipe[i].x == 135) {
            pipe.push({
                x: stage.width,
                y: Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height
            })
        }
        if (continua == false) {
            pipe[i].x++;
        }
        //colisão
        if (bx + person.width >= pipe[i].x && bx <= pipe[i].x + pipeNorth.width &&
            (by <= pipe[i].y + pipeNorth.height || by + person.height >= pipe[i].y + constant) ||
            by + person.height >= stage.height - fg.height) {
            game_over();
        }

        if (pipe[i].x == 5) {
            score++;

        }
    }
    ctx.drawImage(fg, 0, stage.height - fg.height);
    //person posição inicial
    var bd = ctx.drawImage(person, bx, by);
    //gravidade
    by += gravity;

    var width_convas = (stage.width / 2) - 10;
    ctx.fillStyle = "#FFF";
    ctx.strokeStyle = "#000";
    ctx.font = "70px Game";
    ctx.fillText(score, width_convas, 80);
    ctx.strokeText(score, width_convas, 80);
    requestAnimationFrame(draw);
}

function begin() {
    draw();
    playGameButton.style.display = "none";
    btn_again.style.display = "block";
}