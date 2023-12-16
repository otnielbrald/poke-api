


export  function firstUpperCase(nombre) {
   

   let firstLetter = nombre[0].toUpperCase()
   let wordUpCase = nombre.replace(nombre[0],firstLetter)

   return wordUpCase
  
}