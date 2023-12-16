import { searchUrl } from "../helpers/search-url.js";
import { ColorPage } from "./Pages/Colors/Color-page.js";
import { HabitatPage } from "./Pages/Habitat/Habitat-page.js";
import { Home } from "./Pages/home/Home.js";
import { Pokemon } from "./Pokemon/Pokemon.js";
import { ShapePage } from "./Pages/Shape/Shape-page.js";
import { TypesPage } from "./Pages/Types/Types-page.js";
import { AbilityPage } from "./Pages/Abilities/Ability-page.js";
import { PokemonPages } from "./Pages/Pokemon-pages.js";
import poke_api from "../helpers/poke_api.js";


export async function Router() {
 const $pokes = document.getElementById('pokes')
 let {hash} = location
 let valor = new Number(localStorage.getItem('range'))

 

let Name = searchUrl()

 $pokes.innerHTML = null
 document.querySelector('.loader').style.display = 'block'
 if (!hash || hash === '#/') {
  await Home()

 }else if (hash === `#/pokemon/range(${valor}-${valor+20})`) {
  await PokemonPages(valor)
 
 }else if (hash === `#/pokemon${Name}`) {
  await Pokemon(Name)
 
 }else if (hash === `#/ability${Name}`) {
  await AbilityPage(Name)

 }else if (hash === `#/type${Name}`) {
  await TypesPage(Name)
  
}else if (hash === `#/pokemon/color${Name}`) {
  await ColorPage(Name)

}else if (hash === `#/pokemon/habitat${Name}`) {
  await HabitatPage(Name)

}else if (hash === `#/pokemon/shape${Name}`) {
  await ShapePage(Name)
  
 }else {
  $pokes.innerHTML = '<h2>Seccion del NADA</h2>'

 }
  
 document.querySelector('.loader').style.display = 'none'
}