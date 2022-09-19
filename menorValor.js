const carros = require('./carros-preco-ano-modelo')

function menorValor(arrProdutos, posicaoInicial){
  let maisBarato = posicaoInicial

  for(let atual = posicaoInicial; atual < arrProdutos.length; atual++){
    if(arrProdutos[atual].valor < arrProdutos[maisBarato].valor){
      maisBarato = atual
    }
  }

  return maisBarato
}

module.exports = menorValor