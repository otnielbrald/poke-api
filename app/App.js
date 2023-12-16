import { Header } from './components/Header.js';
import { Loader } from './components/Loader.js';
import { Pokes } from './components/Pokes.js';
import { Router } from './components/Router.js';

import { elementosBusqueda } from './helpers/elementos-busqueda.js';





export async function App() {
 const $root = document.getElementById('root')



 $root.appendChild(Header())
 $root.appendChild(Pokes())
 $root.appendChild(Loader())



 elementosBusqueda()


 Router()





  }
// })


// }




//     for (let index = 0; index < data.results.length; index++) {
//       document.getElementById('root').innerHTML += `<h2>${data.results[index].name}</h2>`
      
//     }
//   }
// }) 