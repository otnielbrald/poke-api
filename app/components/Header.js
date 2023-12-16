import { Menu } from "./Menu.js"
import { SearchForm } from "./SearchForm.js"

export function Header() {
  const $header = document.createElement('header'),
    $h1 = document.createElement('h1')
  
  $h1.textContent = 'Pokemon'
  $header.classList.add('header')
  $header.appendChild($h1)
  $header.appendChild(Menu())
  $header.appendChild(SearchForm())
 
  return $header
}