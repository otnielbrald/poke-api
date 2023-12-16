export function Menu() {
  const $menu  = document.createElement('nav')
  $menu.innerHTML = `
  <a href="#/">Home</a>
  <a href="#/especie">Especies</a>
  <a href="#/habitad">Habitad</a>  
  `
  $menu.classList.add('menu')
  return $menu
}