import { firstUpperCase } from "../../../helpers/first-upper-case.js"
import api from "../../../helpers/poke_api.js"
import { PokeCard } from "../home/PokeCard.js"



export async function ShapePage(name) {
  const $pokes = document.getElementById('pokes')
  $pokes.className = 'ability-page'
  let html = ''
  let value = 10

  // **************** Peticion a la data de la forma ********************
  await fetch(`${api.SHAPE_ID}${name}`)
    .then(res => res.json())
    .then( async (dataShape) => {
      

      // ********************** Iterar los pokemones de la misma forma ***********************
      for (let i = 0; i < dataShape.pokemon_species.length; i++) {
        const element = dataShape.pokemon_species[i];

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
            case 10:
              $pokes.innerHTML = `
              <h2>Pokemons that have the ${firstUpperCase(dataShape.name)} shape</h2>
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
