const carros = require('./carros-preco-ano-modelo')

let maisBarato = 0

for(let atual = 0; atual < carros.length; atual++){
  if(carros[atual].valor < carros[maisBarato].valor){
    maisBarato = atual
  }
}

console.log(`O carro mais barato é o ${carros[maisBarato].veiculo} e custa ${carros[maisBarato].valor} e a sua marca é ${carros[maisBarato].marca}`)