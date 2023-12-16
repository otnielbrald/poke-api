import { ajax } from "../../helpers/ajax.js";
import api from "../../helpers/poke_api.js";
import { PokeDatos } from "./PokeDatos.js";

export async function Pokemon(name) {
  const $pokes =  document.getElementById('pokes')
  
  

  $pokes.className= 'pokemon-content'
  
  await ajax({
    url: `${api.POKEMON_ID}${name}`,
    success: async (pokemon) => {
      console.log(pokemon);
      
      
      $pokes.innerHTML = await PokeDatos(pokemon)      
      
      
    }
  })
  
}