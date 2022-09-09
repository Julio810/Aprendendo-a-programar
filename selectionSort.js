const carros = require('./carros-preco-ano-modelo')
const menorValor = require('./menorValor')

for(let atual = 0; atual < carros.length; atual++){
  let menor = menorValor(carros, atual)

  let carroAtual = carros[atual]
  console.log('Posição atual', atual)
  console.log('Carro atual', carros[atual])
  let carroMenorPreco = carros[menor]
  console.log('Carro menor preço', carros[menor])

  carros[atual] = carroMenorPreco
  carros[menor] = carroAtual
}

console.log(carros)