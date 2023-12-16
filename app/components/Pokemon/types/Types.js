import { ajax } from "../../../helpers/ajax.js";

export async function Types(types) {

  
  let li = ''
  let liDoubleDamageFrom = ''
  let liDoubleDamageTo = ''
  let liHalfDamageFrom = ''
  let liHalfDamageTo = ''

  for (let i = 0; i < types.length; i++) {
    const element = types[i];
    li += `<li><a href="#/type/${element.type.name}">${element.type.name}</a>`
    await ajax({
      url: element.type.url,
      success:  (dataTypes => {
        dataTypes.damage_relations.double_damage_from.forEach(el => {
          liDoubleDamageFrom += `<li>${el.name}</li>` })
        dataTypes.damage_relations.double_damage_to.forEach(el => {
          liDoubleDamageTo += `<li>${el.name}</li>` })
        dataTypes.damage_relations.half_damage_from.forEach(el => {
          liHalfDamageFrom += `<li>${el.name}</li>` })
        dataTypes.damage_relations.half_damage_to.forEach(el => {
          liHalfDamageTo += `<li>${el.name}</li>` })

        li += `<ul><p>Double damage from:</p>${liDoubleDamageFrom}</ul>
          <ul><p>Double damage to:</p>${liDoubleDamageTo}</ul>
          <ul><p>Half damage from:</p>${liHalfDamageFrom}</ul>
          <ul><p>Half damage to:</p>${liHalfDamageTo}</ul></li>`
      })
    })
   
  }
  
  
  
  
  return `<ul class="types-ul"><p>Tipos ${li}</p></ul>`


}