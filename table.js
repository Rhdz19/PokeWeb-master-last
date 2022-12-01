const API_URL = "https://pokeapi.co/api/v2";

const searchQuery = document.querySelector("#searchQueryInput");

const type = document.querySelector(".table__column--type");
const dfrom = document.querySelector(".table__damage--from");
const dto = document.querySelector(".table__damage--to");
const hfrom = document.querySelector(".table__half--from");
const hto = document.querySelector(".table__half--to");

// const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)


const putValues = data => {
    console.log(data);
    const damages = data.damage_relations;

    type.innerText = `${data.name[0].toUpperCase() + data.name.slice(1)}`;
    dfrom.innerHTML = "";
    damages.double_damage_from.map(type => dfrom.innerHTML += `<li>${type.name[0].toUpperCase() + type.name.slice(1)}</li>`)
    dto.innerHTML = "";
    damages.double_damage_to.map(type => dto.innerHTML += `<li>${type.name[0].toUpperCase() + type.name.slice(1)}</li>`)
    hfrom.innerHTML = "";
    damages.half_damage_from.map(type=> hfrom.innerHTML += `<li>${type.name[0].toUpperCase() + type.name.slice(1)}</li>`);
    hto.innerHTML = "";
    damages.half_damage_to.map(type=> hto.innerHTML += `<li>${type.name[0].toUpperCase() + type.name.slice(1)}</li>`);
  };




let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let pokemon = urlParams.get("type");

fetch(`${API_URL}/type/${pokemon}`)
  .then((response) => response.json())
  .then(putValues);

function printValue() {
  let type = searchQuery.value;
  type = type.toLowerCase();

  if(type){
    return window.location.replace(`tabla.html?type=${type}`)
  }
  return alert("Empty search")
}


