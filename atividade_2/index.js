// ## Importe a biblioteca ##
let rs = require('readline-sync');


// ## Faça o código ##
const yes = 'sim';

let question = rs.question('vc esta usando mascara ao sair de casa? sim | nao: '); 

let question1 = rs.question('Vc esta lavando as maos ao sair de casa? sim | nao: ')

if (question == yes && question1 == yes) {
    console.log('Parabens Continue Assim')
}else {
    console.log('Que Feio Hein, Comece a Usar')
}

