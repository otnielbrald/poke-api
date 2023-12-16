export async function ajax(props) {
  let {url, success} = props

  await fetch(url)
  .then(res => (res.ok ? res.json() : Promise.reject(res)))
  .then(json => success(json))
  .catch(err => {
    console.log(err);
    let message = err.statusText || 'Ocurrio un error al acudir a la API'

    document.getElementById('pokes').innerHTML = 
    `<div class="error">
      <p>Error ${err.status}: ${message}</p>
    </div>`

    document.querySelector('.loader').style.display = 'none'
  }
  )
}
  
  