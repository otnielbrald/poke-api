import { firstUpperCase } from "../../../helpers/first-upper-case.js";
import api from "../../../helpers/poke_api.js";
import { PokeCard } from "../home/PokeCard.js";


export async function HabitatPage(name) {
  const $pokes = document.getElementById('pokes')
  $pokes.className = 'ability-page'
  let html = ''
  let value = 10

  // **************** Peticion a la data del habitat ********************
  await fetch(`${api.HABITAT_ID}${name}`)
    .then(res => res.json())
    .then( async (dataHabitat) => {

      // ********************** Iterar los pokemones del mismo habitat ***********************
      for (let i = 0; i < dataHabitat.pokemon_species.length; i++) {
        const element = dataHabitat.pokemon_species[i];

        // ************************* Peticion a la data de cada pokemon *******************
        await fetch(`${api.POKEMON_ID}/${element.name}`)
          .then(res => res.json())
          .then( (dataPokemon) => {

            // ****************** Guardar el html *********************
              html += `${PokeCard(dataPokemon)}`
          })
          .catch(err => console.log(err))

        // ********************* Pintar html de 10 en 10 *******************
          switch (i) {
            case 9:
              $pokes.innerHTML = `
              <h2>Pokemons that have the ${firstUpperCase(dataHabitat.name)} habitat</h2>
              <div class="grid-fluid">${html}</div>`
              value += 10
              html = ''
              break;
            
            case value:
              $pokes.lastElementChild.innerHTML += html
              value += 10
              html = '' 
            default:
              break;
          }
      }
      $pokes.lastElementChild.innerHTML += html
      
    })
}
