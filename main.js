const API_URL = "https://pokeapi.co/api/v2";

const searchQuery = document.querySelector("#searchQueryInput");
const pokemon_name = document.querySelector(".pokemon-name");
const pokemon_img = document.querySelector("#pokemon-image");
const type_list = document.querySelector(".type-list");
const pokemon_measures = document.querySelector(".pokemon-measures");
const pokemon_abilities = document.querySelector(".abilities-list")


const putValues = (pokemon) => {
  pokemon_name.innerHTML = `${pokemon.id} - ${pokemon.name[0].toUpperCase()+ pokemon.name.slice(1)}`;
  pokemon_img.src = `${pokemon.sprites.front_default}`;
  type_list.innerHTML = "";
  pokemon.types.map((type) => type_list.innerHTML +=`<li onClick="location.href='tabla.html?type=${type.type.name}'" class="${type.type.name}">${type.type.name[0].toUpperCase()+type.type.name.slice(1)}</li>`);

  pokemon_abilities.innerHTML = "";
  pokemon.abilities.map(ability => pokemon_abilities.innerHTML += `<li>${ability.ability.name[0].toUpperCase() + ability.ability.name.slice(1)}</li>`)
  
  pokemon_measures.innerHTML = `<span>Height - ${
    pokemon.height / 10
  }M </span> <span> Weight - ${pokemon.weight / 10}Kg</span>`;
};

let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let pokemon = urlParams.get("pokemon");

fetch(`${API_URL}/pokemon/${pokemon}`)
  .then((response) => response.json())
  .then(putValues);

function printValue() {
  let pokemon = searchQuery.value;
  pokemon = pokemon.toLowerCase();
  

  if(pokemon){
    return window.location.replace(`pokedex.html?pokemon=${pokemon}`)
  }
  return alert("Empty search")

  
}

function nextPokemon(){
  var node = document.getElementById('pokemon-name'),
  textContent = node.textContent.slice(0,2);

  textContent.valueOf();
  const next = 1;
  const nextPok = Number(textContent) + Number(next);
  
  return location.href=`pokedex.html?pokemon=${nextPok}`;
  return window.location.href(`pokedex.html?pokemon=${nextPok}`);
}

function previousPokemon(){
  var node = document.getElementById('pokemon-name'),
  textContent = node.textContent.slice(0,2);

  textContent.valueOf();
  const next = 1;
  const nextPok = Number(textContent) - Number(next);
  
  return location.href=`pokedex.html?pokemon=${nextPok}`;
  return window.location.href(`pokedex.html?pokemon=${nextPok}`);
}