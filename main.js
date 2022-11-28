const API_URL = "https://pokeapi.co/api/v2";

const searchQuery = document.querySelector("#searchQueryInput");
const pokemon_name = document.querySelector(".pokemon-name");
const pokemon_img = document.querySelector("#pokemon-image");
const type_list = document.querySelector(".type-list");
const pokemon_measures = document.querySelector(".pokemon-measures");
const pokemon_abilities = document.querySelector(".abilities-list")

var id;

const putValues = (pokemon) => {
  pokemon_name.innerHTML = `${pokemon.id} - ${pokemon.name}`;
  pokemon_img.src = `${pokemon.sprites.front_default}`;
  type_list.innerHTML = "";
  pokemon.types.map((type) => type_list.innerHTML +=`<li class="${type.type.name}">${type.type.name}</li>`);

  pokemon_abilities.innerHTML = "";
  pokemon.abilities.map(ability => pokemon_abilities.innerHTML += `<li>${ability.ability.name}</li>`)
  
  pokemon_measures.innerHTML = `<span>Height - ${
    pokemon.height / 10
  }M </span> <span> Weight - ${pokemon.weight / 10}Kg</span>`;
};

const url = new URL('/pokedex.html?id=' + id);
const searchParams = url.searchParams;

searchParams.get('id'); 

fetch(`${API_URL}/pokemon/1`)
  .then((response) => response.json())
  .then(putValues);

function printValue() {
  let pokemon = searchQuery.value;
  pokemon = pokemon.toLowerCase();
  fetch(`${API_URL}/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then(putValues);
}
