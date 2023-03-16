// Referenciando os elementos que estão na parte html e guarda-los em variáveis
const buscaInput = document.querySelector("#busca");
const botaoBusca = document.querySelector(".btn_procurar");
const pokeParte = document.querySelector(".parte_pokemons");

// Total de Pokémons que irá aparecer
const pokeTotal = 150;

// Carregar o total de Pokémons contido na variável pokeTotal
const pokeCarregar = async () => {
  for (let i = 1; i <= pokeTotal; i++) {
    await getPokemon(i);
  }
};

// Acessando a API e resgatando as informações
const getPokemon = async (id) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  let res = await fetch(url);
  let data = await res.json();
  caixaPokemon(data);
};

// Com as informações dos Pokémons resgatada, o card referente a ele será gerado
const caixaPokemon = (pokemon) => {
  const types = pokemon.types.map((typeInfo) => typeInfo.type.name);
  const nome = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const pokeID = pokemon.id;
  const pokemonElement = document.createElement("div");
  pokemonElement.classList.add("elemento");
  pokemonElement.innerHTML = `
    <a href="./descricao-pokemon.html?id=${pokeID}">
        <div class="card_pokemons ">
            <div class="imagem ${types[0]}">
                <img src="${
                  pokemon["sprites"]["versions"]["generation-v"]["black-white"][
                    "animated"
                  ]["front_default"]
                }" alt="${nome}">
            </div>
            <h3 class="pokemon_name">${pokeID}-${nome}</h3>
            <div class="tipo_pokemon">
                <h3 class="${types[0]}">${types.join(" | ")}</h3>
            </div>
        
        </div>
    </a>
    `;

  pokeParte.appendChild(pokemonElement);
};

// Chamando a função para ser exercutada
pokeCarregar();

// Função de buscar os Pokémons pelo input informando o nome
buscaInput.addEventListener("input", function (e) {
  const nomes = document.querySelectorAll(".pokemon_name");
  const pesquisa = buscaInput.value.toLowerCase();
  console.log(nomes);

  nomes.forEach((pokeNames) => {
    pokeNames.parentNode.style.display = "block";

    if (!pokeNames.innerHTML.toLowerCase().includes(pesquisa)) {
      pokeNames.parentElement.style.display = "none";
    }
  });
});
