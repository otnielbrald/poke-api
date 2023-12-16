export function SearchForm() {
  const $form = document.createElement('form')
  const $input = document.createElement('input')
  $input.type = 'search'
  $input.name = 'search'
  $input.placeholder = 'Buscar...'
  $input.autocomplete = 'off'
  $input.classList.add('search')
  
  $form.appendChild($input)

  return $form

}