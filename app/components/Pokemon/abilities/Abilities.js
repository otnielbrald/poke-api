import { ajax } from "../../../helpers/ajax.js";
import { firstUpperCase } from "../../../helpers/first-upper-case.js";

export async function Abilities(abilities) {

  let li = ''
  let p = ''
  for (let i = 0; i < abilities.length; i++) {
    const element = abilities[i];
    li += `<h4><a href="#/ability/${element.ability.name}">${firstUpperCase(element.ability.name)}:</a></h4>`
    if (element.is_hidden) {
      li += `   <b>Hidden ability</b>`
    }
    await ajax({
        url: element.ability.url,
        success: (dataAbilities) => {
          
          if (dataAbilities.effect_entries.length === 0) {
            li += `<p>There isn't description</p></li>`
          }
          else {
            let [filter] = dataAbilities.effect_entries.filter(el => el.language.name === 'en')
            li += `<p>${filter.effect}</p>`
          }
          
      }
    })
    
  }
  
  return li

}


