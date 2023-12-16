import { ajax } from "../../../helpers/ajax.js";

export async function Species(speciesObj) {
  let obj = {
    textColor: '',
    growRate: '',
    habitad: '',
    baby: '',
    legenday: '',
    mythical: '',
    shape: ''
  }
    

  await ajax({
    url: speciesObj.url,
    success: (dataSpecies) => {
      obj.textColor = dataSpecies.color.name
      obj.growRate = dataSpecies.growth_rate.name
      obj.habitad = dataSpecies.habitat ? dataSpecies.habitat.name : "Doesn't have habitat"
      obj.shape = dataSpecies.shape ? dataSpecies.shape.name : "Doesn't have shape"
      obj.baby = dataSpecies.is_baby ? 'Is a baby' : 'Is not a baby'
      obj.legenday = dataSpecies.is_legendary ? 'Is legendary' : 'Is not legendary' 
      obj.mythical = dataSpecies.is_mythical ? 'Is mythical' : 'Is not mythical' 
    }
  })

  return obj
}