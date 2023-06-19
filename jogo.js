const NUM_MOEDAS = 40;
const TEMPO_INICIAL = 10;
let pontos = 0;
let tempo = 0;
let time = null;

function iniciaJogo(){
pontos = 0;
tempo = TEMPO_INICIAL;
let tela = document.getElementById("tela");
tela.innerHTML = "";

 for(let i = 0 ; i < NUM_MOEDAS; ++i) {
    let moeda = document.createElement("img");
    moeda.src = "moeda100x.png";
    moeda.id = "m"  +  i ;
    moeda.onclick = function(){
        pegaMoeda(this);
    }
    tela.appendChild(moeda);
 }
}
timer = setInterval(contarTempo, 1000);
  


function pegaMoeda(moeda) {
  if (tempo <= 0) return;
  moeda.onclick = null;
  moeda.src = "moedaCx.png";
  ++pontos;

  let contadorPontos = document.getElementById("pontos");
  contadorPontos.innerText = pontos;
}

function contarTempo() {
  --tempo;
  let contadorTempo = document.getElementById("tempo");
  contadorTempo.innerText = tempo;

  if (tempo <= 0) {
    clearInterval(timer);
    alert("Parabéns frango, você fez " + pontos + " pontos!");
    iniciaJogo();
  }
  
}



