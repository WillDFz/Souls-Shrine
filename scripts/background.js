const numeroDeBackgrounds = 20;
let backgroundSlots = [];
var backgroundImages = [];
var a = 5;

// onLoad dos backgrounds
function startBackgrounds() {
  criaVetorImagens();
  randomBackground();
}

// Botao Random
var botaoRandom = document.getElementById("botaoRandom");
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

// Renderizando slots
inventoryButton.addEventListener("click", renderSlots);

function renderSlots() {
  const inventoryContent = document.querySelector(".inventoryContent");
  for (let i = 1; i <= numeroDeBackgrounds; i++) {
    let slot = document.createElement("div");
    slot.classList.add(`gif-${i}`);
    slot.classList.add("inventory-slot");
    slot.setAttribute("onclick", "changeBackground(this.className);");
    slot.style.backgroundImage = `url(media/backgrounds/${i}.gif)`;
    slot.style.backgroundPosition = "center";
    slot.style.backgroundRepeat = "repeat";
    slot.style.backgroundSize = "cover";
    inventoryContent.appendChild(slot);
  }
}

function changeBackground(string) {
  // Remove "gif" do nome do arquivo
  let noLetters = string.replace(/gif-/g, "");
  // Faz Cast no resto da string, apagando o que vier depois do numero
  num = parseInt(noLetters);
  // Muda o background de acordo com o numero extraido da string
  if (document.body) {
    document.body.background = backgroundImages[num];
  }
}
