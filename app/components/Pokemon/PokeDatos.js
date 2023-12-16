// import { ajax } from "../../helpers/ajax.js"
import { firstUpperCase } from "../../helpers/first-upper-case.js"
import { Abilities } from "./abilities/Abilities.js"
import { Species } from "./species/Species.js"
import { Types } from "./types/Types.js"


export async function PokeDatos(obj) {
  let {abilities, height, name, moves, species, sprites, stats, types, weight} = obj
  const d = document

  const SPECIES = await Species(species)
  



  let li = ''
  stats.forEach(el => li += `<li>${el.stat.name} - <b>${el.base_stat}</b></li>`)
  let ulStats = `<ul><p>Estadisticas${li}</p></ul>`

  // ************************Conocer los tipos

  li = ``
  types.forEach(el => li += `<a href="#/type/${el.type.name}">${firstUpperCase(el.type.name)}</a>`)
  let bTypes = li
    // ************************Conocer los movimientos

  li = ''
  moves.forEach(el => li += `<li>${el.move.name}</li>`)
  let ulMoves = `<ul>Moves${li}</ul>`


 
  return `
  <h2>${firstUpperCase(name)}</h2>
  <hr />
  <div class="pokemon-main">

    <div class="pokemon-info">

      <div class="pokemon-data">
        <div class="poke-header">
          <table>
            <tr>
              <td>Species</td>
              <td><b>${firstUpperCase(species.name)}</b></td>
            </tr>
            <tr>
              <td>Types</td>
              <td>${bTypes}</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>
                <a href="#/pokemon/color/${SPECIES.textColor}">${firstUpperCase(SPECIES.textColor)}</a>
              </td>
            </tr>
            <tr>
              <td>Shape</td>
              <td>
                ${SPECIES.shape === "Doesn't have shape" ? "Doesn't have shape" : `<a href="#/pokemon/shape/${SPECIES.shape}">${firstUpperCase(SPECIES.shape)}</a>`}
              </td>
            </tr>
            <tr>
              <td>Habitat</td>
              <td>
                ${SPECIES.habitad === "Doesn't have habitat" ? "Doesn't have habitat" : `<a href="#/pokemon/habitat/${SPECIES.habitad}">${firstUpperCase(SPECIES.habitad)}</a>`}
              </td>
            </tr>
            <tr>
              <td>Height</td>
              <td>${height/10} m</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>${weight/10} kg</td>
            </tr>
            <tr>
              <td>Grow rate</td>
              <td>${firstUpperCase(SPECIES.growRate)}</td>
            </tr>
            <tr>
              <td>Baby</td>
              <td>${SPECIES.baby}</td>
            </tr>
            <tr>
              <td>Legendary</td>
              <td>${SPECIES.legenday}</td>
            </tr>
            <tr>
              <td>Mythical</td>
              <td>${SPECIES.mythical}</td>
            </tr>
          </table>
        </div>

        <div class="pokemon-stats">
          ${ulStats}
        </div>
      </div>
      
      <hr />

      <div class="pokemon-information-main">
        <h3>Abilities</h3>
          ${await Abilities(abilities)}
    
          ${await Types(types)}

      </div>
    </div>
    <div class="pokemon-img">
      <div class="pokemon-img-fixed">
        <img src="${sprites.front_default || 'app/assets/bars.svg'}" alt="${name}" />
        <img src="${sprites.back_default || 'app/assets/bars.svg'}" alt="${name}" />
      </div>
    </div>
  </div>
  
  `
  
}