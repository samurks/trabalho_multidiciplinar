// Função para criar um elemento HTML e adicionar ao container
function criarElemento(texto) {
    const container = document.getElementById('container');
    const elemento = document.createElement('p');
    elemento.textContent = texto;
    container.appendChild(elemento);
  }

  // Fazer a requisição à API do Pokémon para obter a lista de Pokémon
  fetch('https://pokeapi.co/api/v2/pokemon?limit=5')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na requisição');
      }
      return response.json();
    })
    .then(data => {
      // Processar os dados e exibir a lista de Pokémon no HTML
      console.log(data.results);
      const pokemonList = data.results;
      pokemonList.forEach(pokemon => {
        criarElemento(pokemon.name);
      });
    })
    .catch(error => {
      console.error(error);
    });

    