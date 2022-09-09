const carros = require('./carros-preco-ano-modelo')

function menorAno(arrProdutos, posicaoInicial){
  let menorAno = posicaoInicial

  for(let atual = posicaoInicial; atual < arrProdutos.length; atual++){
    if(arrProdutos[atual].ano < arrProdutos[menorAno].ano){
      menorAno = atual
    }
  }

  return menorAno
}

module.exports = menorAno