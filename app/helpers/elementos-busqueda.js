import api from "./poke_api.js";

export async function elementosBusqueda() {

  // ********************** Creo las variables necesarias ************************
  const $search = document.querySelector('.search'),
    $form = document.querySelector('form'),
    $div = document.createElement('div'),
    $nav = document.createElement('nav'),  
    $fragment = document.createDocumentFragment()

  $nav.classList.add('searching')

  // 

  let pokemon = null,
    ability = null,
    types = null,
    color = null,
    habitat = null,
    shape = null
  

  // ********************* Busco la data mediante una peticion  y la guardo          **************************
  
  switch (null) {
    case pokemon:
      await fetch(`${api.POKEMON_ID}?offset=0&limit=1292`)
      .then(res => res.json())
      .then(dataPokemon => pokemon = dataPokemon)
      // console.log(pokemon);

    case ability:
      await fetch(`${api.ABILITY_ID}?offset=0&limit=363`)
      .then(res => res.json())
      .then(dataAbility => ability = dataAbility)
      // console.log(ability);

    case types:
      await fetch(api.COLOR_ID)
      .then(res => res.json())
      .then(dataColor => color = dataColor)
      // console.log(color);

    case color:
      await fetch(`${api.TYPES_ID}`)
      .then(res => res.json())
      .then(dataType => types = dataType)
      // console.log(types);

    case habitat:
      await fetch(`${api.API_POKE}/pokemon-habitat`)
      .then(res => res.json())
      .then(dataHabitat => habitat = dataHabitat)
      // console.log(habitat);

    case shape:
      await fetch(`${api.API_POKE}/pokemon-shape`)
      .then(res => res.json())
      .then(dataShape => shape = dataShape)
      // console.log(shape);    
  
    default:
      break;
  }
  
  
  
 
//  ****************** Escribo en el input y guardo la busqueda ***************

  const datos = [ pokemon, ability, types, color, habitat,shape]
    let arrLinksJoin = []

 

  $search.addEventListener('input', e => {
    $nav.innerHTML = ''
    arrLinksJoin = []
    for (const el of datos) {
      let arrlinks = el.results.filter(el => el.name.startsWith(e.target.value))
      arrLinksJoin = [...arrLinksJoin, ...arrlinks]
    }
     let arrSlice =  arrLinksJoin.slice(0,5)

    //  ***************** Creo los enlaces de busqueda ********************
    arrSlice.forEach(el => {
      const $a = document.createElement('a')
      $a.classList.add('searching-link')

      
      if (pokemon.results.some(it => it.name === el.name)) {
        $a.href = `#/pokemon/${el.name}`

      } else if (ability.results.some(it => it.name === el.name)) {
        $a.href = `#/ability/${el.name}`
  
      }else if (types.results.some(it => it.name === el.name)) {
        $a.href = `#/type/${el.name}`

      }else if (color.results.some(it => it.name === el.name)) {
        $a.href = `#/pokemon/color/${el.name}`

      }else if (habitat.results.some(it => it.name === el.name)) {
        $a.href = `#/pokemon/habitat/${el.name}`

      }else {
        $a.href = `#/pokemon/shape/${el.name}`
      }
      
      $a.textContent = el.name
      $fragment.appendChild($a)
    })
    $nav.appendChild($fragment)
    $div.appendChild($nav)
    $form.appendChild($div)
  })



  document.addEventListener('click', e=> {
    if (!(e.target.matches('.search'))) {
      $nav.remove()
      $search.value = ''
    }
  })
  
}

  


  

  

  




