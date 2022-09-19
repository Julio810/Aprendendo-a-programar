const carros = require('./carros-preco-ano-modelo')

function insertionSort(lista){
  for(let atual = 0; atual < lista.length; atual++){
    let analise = atual
    while(analise > 0 && lista[analise].valor < lista[analise - 1].valor){
      let itemAnalise = lista[analise]
      let itemAnterior = lista[analise - 1]

      carros[analise] = itemAnterior
      carros[analise - 1] = itemAnalise

      analise--
    }
  }

  console.log(lista)
}

insertionSort(carros)