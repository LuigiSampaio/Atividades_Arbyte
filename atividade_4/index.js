let rs = require('readline-sync');


let dataDia = rs.questionInt('dia: ')
if (dataDia > 31){  
        console.log('dia invalido');
}

let dataMes = rs.questionInt('mes: ');
if (dataMes >12){
    console.log('mes invalidado')
}

if((dataDia >= 20 && dataMes == 01 ) || (dataDia <=18 && dataMes == 02)) {
    console.log('seu signo e aquario');
}

if ((dataDia >=19 && dataMes == 02) || (dataDia <=20 && dataMes == 03)){
    console.log('seu signo e peixes');
}

if((dataDia >=21 && dataMes == 03) || (dataDia <=19 && dataMes == 04)){
    console.log('seu signo e aries')
}

if ((dataDia >=20 && dataMes == 04)|| (dataDia <=20 && dataMes == 05)){
    console.log('seu signo e touro');
}

if ((dataDia >=21 && dataMes == 05) || (dataDia <=20 && dataMes == 06)){
    console.log('seu signo e gemeos');
}

if ((dataDia >=21 && dataMes == 06) || (dataDia <=22 && dataMes == 07))
{
    console.log('seu signo e cancer');
}

if((dataDia >=23 && dataMes == 07) || (dataDia <=22 && dataMes == 08)){
    console.log('seu signo e leao');
}

if ((dataDia >=23 && dataMes == 08) || (dataDia <=22 && dataMes == 09)){
    console.log('seu signo e virgem')
}

if ((dataDia >=23 && dataMes == 09) || (dataDia <=22 && dataMes == 10)){
    console.log('seu signo e libra')
}

if ((dataDia >=23 && dataMes == 10) || (dataDia <=21 && dataMes == 11)){
    console.log('seu signo e escorpiao');
}

if ((dataDia >=22 && dataMes == 11) || (dataDia <=21 && dataMes == 12)){
    console.log('seu signo e sagitario');
}

if ((dataDia >= 22 && dataMes == 12) || (dataDia <=19 && dataMes == 01)){
    console.log('seu signo e capricornio');
}
