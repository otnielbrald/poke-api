import { ajax } from "../../../helpers/ajax.js";
import { firstUpperCase } from "../../../helpers/first-upper-case.js";
import api from "../../../helpers/poke_api.js";
import { PokeCard } from "../home/PokeCard.js";

export async function AbilityPage(name) {
  let html = ''
  
  const $pokes = document.getElementById('pokes')
  $pokes.className = 'ability-page'

  await ajax({
    url: `${api.ABILITY_ID}${name}`,
    success: async (dataAbility) => {
      for (let i = 0; i < dataAbility.pokemon.length; i++) {
        const element = dataAbility.pokemon[i];
        await ajax({
          url: element.pokemon.url,
          success: (dataPokemon) => {            
            let img = dataPokemon.sprites.front_default
            html += PokeCard(dataPokemon,img)
          }
        })
      }
      $pokes.innerHTML = `
      <h2>Pokemons that have the ${firstUpperCase(dataAbility.name)} ability</h2>
      <div class="grid-fluid">${html}</div>`
    }
  })
  

}