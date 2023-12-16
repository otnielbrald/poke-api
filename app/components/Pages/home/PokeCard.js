import { firstUpperCase } from "../../../helpers/first-upper-case.js"

export function PokeCard(props) {
let {name, sprites} = props

return  `<article class="poke-card">
    <img src='${sprites.front_default}' alt="${name}">
    <h2>${firstUpperCase(name)}</h2>
    <a href="#/pokemon/${name}" class="btn-ver" data-name="${name}">Ver mas</a>
  </article>
`
    
}