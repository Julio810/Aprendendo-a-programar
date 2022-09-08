const carros = require('./preco-carros')

let maisModerno = 0

for (let atual = 0; atual < carros.length; atual++){
  if(carros[atual].ano < carros[maisModerno].ano){
    maisModerno = atual
  }
}

console.log(`O carro mais moderno é do ano ${carros[maisModerno].ano} e o veículo é ${carros[maisModerno].veiculo}`)