import { PokeCard } from "./PokeCard.js";
import api from "../../../helpers/poke_api.js";
import { ajax } from "../../../helpers/ajax.js";
import { Pagination } from "./Pagination.js";

export async function Home() {
  
  
  const $pokes = document.getElementById('pokes')
  $pokes.className= 'ability-page'

  let value = 10
  let html = ''
  await ajax({
    url: `${api.POKEMON}`,
    success: async (data) => {
      
      
      for (let i = 0; i < data.results.length; i++) {
        const pokemon = data.results[i];
        
        await ajax({
          url: pokemon.url,
          success:  (pokem) => {
            // console.log(pokem);
            html += PokeCard(pokem)  
          }
        })

        switch (i) {
          case 10:
            $pokes.innerHTML = `<div class="grid-fluid">${html}</div>`
            value += 10
            html = ''
            break;
          
          case value:
            $pokes.firstElementChild.innerHTML += html
            value += 10
            html = '' 
          default:
            break;
        }
       
      }
      $pokes.firstElementChild.innerHTML += html
      $pokes.innerHTML += `<div class="pagination-style"></div>`

    }
  })
  Pagination()
  
}