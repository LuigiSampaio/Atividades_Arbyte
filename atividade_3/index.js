// ## Importe a biblioteca ##
let rs = require('readline-sync')


// ## Faça o código ##
let alt = rs.questionFloat('Informe a altura do quadrado: ');

let bas = rs.questionFloat('Informe a base do quadrado: ');

let calc = alt * bas;

console.log(`A Area do Quadrado é ${calc} Cm`);

