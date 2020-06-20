// ## Importe a biblioteca ##
let rs = require('readline-sync');


// ## Faça o código ##
let voo = rs.question('Qual o Numero do seu Voo: ');

let choice = require('readline-sync'),
  assents = ['A', 'B', 'C', 'D', 'E', 'F'],
  index = choice.keyInSelect(assents, 'Qual assento?');

console.log('Seu Voo Nº ' + voo + ' com o assento ' + assents[index] + ' foi escolhido com Sucesso!');
