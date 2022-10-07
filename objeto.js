var carro = {
  marca: 'GM',
  cor: 'verde',
  potencia: '1.0',
};

//template string
console.log(
  `eu encontrei um carro ${carro.marca} na cor ${carro.cor} com a potencia ${carro.potencia}`
);

console.log(carro.cor);
console.log(
  'encontrei um carro ' +
    carro.marca +
    ' na cor ' +
    carro.cor +
    ' com a potencia ' +
    carro.potencia
);



