
const NUM_MOEDAS = 40;
const TEMPO_INICIAL = 10;
let pontos = 0;
let tempo = 0;
let time = null;

let player = prompt("digite seu nome")

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
    let pontuacao = {
      pontuacao: pontos,
      nome: player
    };
    
    fetch('http://localhost:5050/score', {
      method: "POST",
      body: JSON.stringify(pontuacao),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => console.log(json))
    .catch(err => console.log(err));
    
    alert("Parabéns, "+ player "você fez " + pontos + " pontos!");
    iniciaJogo();
  }
  
}

// Função para criar um elemento HTML e adicionar ao container


function criarElemento(name, pontos) {
  const container = document.getElementById('container');
  const nome = document.createElement('h1');
  const pontuacao = document.createElement('h4');

  nome.textContent = name;
 pontuacao.textContent = pontos;

  container.appendChild(nome);
  container.appendChild(pontuacao);
}


fetch('http://localhost:5050/score')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
    return response.json();
  })
  .then(data => {
    // Processar os dados e exibir a lista no HTML
    console.log(data);

    const jogadores = data;

    jogadores.forEach(jogador => {
      criarElemento(jogador.nome, jogador.pontuacao);
    });
  })
  .catch(error => {
    console.error(error);
  });



