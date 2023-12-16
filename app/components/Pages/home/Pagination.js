

export function Pagination(offset = 0) {
  const $nav = document.createElement('nav')
  const $btnLeft = document.createElement('button')
  const $btnRight = document.createElement('button')

  $nav.classList.add('pagination')

  $btnLeft.textContent = 'Left'
  $btnLeft.classList.add('btn-left')
  
  $btnRight.textContent = 'Right'
  $btnRight.classList.add('btn-right')

  let num = 0,
   pagina = 1,
   arrNav = []
   while (num < 1292) {
    const $a = document.createElement('a')
    $a.textContent = pagina++   
    $a.dataset.offset = num
    $a.classList.add('pages')
    $a.href = `#/pokemon/range(${num}-${num+20})`
    num += 20
    arrNav.push($a)
  }

  
  

  let indexLeft, indexRight
  arrNav.forEach(el => {
    
    if (el.dataset.offset == offset) {
        let idxEle = arrNav.indexOf(el)
        let arrFirst = arrNav.slice(idxEle, idxEle+5)
        indexLeft = idxEle
        indexRight = idxEle + 5
        $nav.append(...arrFirst)
        document.querySelector('.pagination-style').append($btnLeft, $nav, $btnRight)
      
    }
  })
  



  if ($nav.firstElementChild.textContent === '1') {
    $btnLeft.disabled = true
  }
  if ($nav.lastElementChild.textContent === '65') {
    $btnRight.disabled = true
  }


  $btnLeft.addEventListener('click', e => {
    let newArr
    indexRight -= 5
    indexLeft -= 5
   

    if (indexLeft < 0) {
     
      indexRight = 5
      indexLeft = 0
      newArr = arrNav.slice(0, 5)
      $nav.replaceChildren(...newArr)
      $btnLeft.disabled = true
      
    }else {

    newArr = arrNav.slice(indexLeft, indexRight)
    $nav.replaceChildren(...newArr)

      if ($nav.firstElementChild.textContent === '1') {
        $btnLeft.disabled = true
      } else {
        $btnLeft.disabled = false
      }

      if ($nav.lastElementChild.textContent === '65') {
        $btnRight.disabled = true
      } else {
        $btnRight.disabled = false
      }
     
    }
  })


  $btnRight.addEventListener('click', e => {
    
    indexRight += 5
    indexLeft += 5
  
    let newArr = arrNav.slice(indexLeft, indexRight)
    
    $nav.replaceChildren(...newArr)

    if ($nav.lastElementChild.textContent === '65') {
      $btnRight.disabled = true
    } else {
      $btnRight.disabled = false
    }

    if ($nav.firstElementChild.textContent === '1') {
      $btnLeft.disabled = true
    }else {
      $btnLeft.disabled = false
    }
  })

  let valor
  document.addEventListener('click', e => {
    if (e.target.matches('.pages')) {
      valor = e.target.dataset.offset
      localStorage.setItem('range', valor)
    }
  })

}