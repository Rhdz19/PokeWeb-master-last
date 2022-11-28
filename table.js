const API_URL = "https://pokeapi.co/api/v2";

const searchQuery = document.querySelector("#searchQueryInput");

const type = document.querySelector(".table__column--type");
const dfrom = document.querySelector(".table__damage--from");
const dto = document.querySelector(".table__damage--to");
const hfrom = document.querySelector(".table__half--from");
const hto = document.querySelector(".table__half--to");

const putValues = data => {
    console.log(data);
    const damages = data.damage_relations;

    type.innerText = `${data.name}`;
    dfrom.innerHTML = "";
    damages.double_damage_from.map(type => dfrom.innerHTML += `<li>${type.name}</li>`)
    dto.innerHTML = "";
    damages.double_damage_to.map(type => dto.innerHTML += `<li>${type.name}</li>`)
    hfrom.innerHTML = "";
    damages.half_damage_from.map(type=> hfrom.innerHTML += `<li>${type.name}</li>`);
    hto.innerHTML = "";
    damages.half_damage_to.map(type=> hto.innerHTML += `<li>${type.name}</li>`);
  };


function printValue() {
  let type = searchQuery.value;
  type = type.toLowerCase();
  
  if(type){
    return fetch(`${API_URL}/type/${type}`)
      .then((response) => response.json())
      .then(putValues);
  }
  return alert("No se ingreso nada");
}

fetch(`${API_URL}/type/1`)
  .then((response) => response.json())
  .then(putValues);