const nome = document.querySelector(".poke-name");
const tipo = document.querySelector(".poke-tipo");
const altura = document.querySelector(".poke-altura");
const peso = document.querySelector(".poke-peso");
const total = document.querySelector(".poke-total");
const hp = document.querySelector(".poke-hp");
const ataque = document.querySelector(".poke-ataque");
const defesa = document.querySelector(".poke-defesa");
const ataqueEs = document.querySelector(".poke-ataEs");
const defesaEs = document.querySelector(".poke-defEs");
const velocidade = document.querySelector(".poke-velocidade");
const imagem = document.querySelector(".pokemon-imagem");
const ghost = document.querySelector(".ghost");
const elemento = document.getElementById("principal");
const tipoHome = document.getElementById("home");
const tipoLogo = document.getElementById("logo");
const tipoPokemons = document.getElementById("pokemons");
const tipoSobre = document.getElementById("sobre");
const linha1 = document.getElementById("L1");
const linha2 = document.getElementById("L2");
const linha3 = document.getElementById("L3");

const urlParametro = new URLSearchParams(window.location.search);
const pokeID = urlParametro.get("id");

const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );
  const data = await APIResponse.json();
  return data;
};

const infoPokemon = async (pokemon) => {
  const data = await fetchPokemon(pokemon);

  const types = data.types.map((typeInfo) => typeInfo.type.name);

  total.innerHTML = `Total: ${
    data["stats"]["0"]["base_stat"] +
    data["stats"]["1"]["base_stat"] +
    data["stats"]["2"]["base_stat"] +
    data["stats"]["3"]["base_stat"] +
    data["stats"]["4"]["base_stat"] +
    data["stats"]["5"]["base_stat"]
  }`;
  nome.innerHTML = `${pokeID} - ${data.name}`;
  tipo.innerHTML = types.join(" | ");
  altura.innerHTML = `Altura:  ${data.height} metros`;
  peso.innerHTML = `Peso: ${data.weight} kg`;
  hp.innerHTML = `HP: ${data["stats"]["0"]["base_stat"]}`;
  ataque.innerHTML = `Ataque: ${data["stats"]["1"]["base_stat"]}`;
  defesa.innerHTML = `Defesa: ${data["stats"]["2"]["base_stat"]}`;
  ataqueEs.innerHTML = `Ataque Especial: ${data["stats"]["3"]["base_stat"]}`;
  defesaEs.innerHTML = `Defesa Especial: ${data["stats"]["4"]["base_stat"]}`;
  velocidade.innerHTML = `Velocidade: ${data["stats"]["5"]["base_stat"]}`;
  imagem.src =
    data["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
      "front_default"
    ];

  principal.className += `${types[0]}`;
  conteudo.className += `${types[0]}`;
  nav.className += `${types[0]}`;

  // Deixando o menu com cor branca, caso a cor de fundo for muito escura
  if (tipoHome.classList) tipoHome.classList.add(`${types[0]}`);
  else tipoHome.className += `${types[0]}`;

  if (tipoLogo.classList) tipoLogo.classList.add(`${types[0]}`);
  else tipoLogo.className += `${types[0]}`;

  if (tipoPokemons.classList) tipoPokemons.classList.add(`${types[0]}`);
  else tipoPokemons.className += `${types[0]}`;

  if (tipoSobre.classList) tipoSobre.classList.add(`${types[0]}`);
  else tipoSobre.className += `${types[0]}`;
};

fetchPokemon(pokeID);
infoPokemon(pokeID);
