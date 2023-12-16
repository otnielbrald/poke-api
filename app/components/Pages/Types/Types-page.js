import { ajax } from "../../../helpers/ajax.js"
import { firstUpperCase } from "../../../helpers/first-upper-case.js"
import api from "../../../helpers/poke_api.js"
import { PokeCard } from "../home/PokeCard.js"

export  async function TypesPage(name) {
  let cards = ''
  let h2 = ''
  const $pokes = document.getElementById('pokes')
  $pokes.className = 'ability-page'

  await ajax({
    url: `${api.TYPES_ID}${name}`,
    success: async (dataType) => {
      
      h2 = `<h2>Pokemons that have the ${firstUpperCase(dataType.name)} type</h2>`
      for (let i = 0; i < dataType.pokemon.length; i++) {
        const element = dataType.pokemon[i];
        await ajax({
          url: element.pokemon.url,
          success: (dataPokemon) => {            
            let img = dataPokemon.sprites.front_default
            cards += PokeCard(dataPokemon,img)
          }
        })

      }
      const $div = document.createElement('div')
      $div.classList.add('grid-fluid')
      $div.innerHTML = cards
      $pokes.innerHTML = h2
      $pokes.appendChild($div)
    }
  })
 

}