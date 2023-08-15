import { 
    getMaxDigit, 
    raiseNumberPower, 
    formatsName, 
    getAmountAfterTax, 
    getRandomNumber, 
    countLetter, 
    convertCurrency, 
    getRandomPassword 
} from './my_functions.js';


document.getElementById('decision_1').innerHTML = `Приклад 1 : getMaxDigit(167523456) => ${getMaxDigit(167523456)} <br>
Приклад 2 : getMaxDigit(987) => ${getMaxDigit(987)}`;

document.getElementById('decision_2').innerHTML = `
Приклад 1 : raiseNumberPower(6, 3) => ${raiseNumberPower(6, 3)} <br>
Приклад 2 : raiseNumberPower(10, -3) => ${raiseNumberPower(6, -3)}`;

document.getElementById('decision_3').innerHTML = `
Приклад 1 : formatsName('влад') => ${formatsName('влад')} <br>
Приклад 2 : formatsName('  влАД   ') => ${formatsName('  влАД   ')}`;

document.getElementById('decision_4').innerHTML = `
Приклад 1 : getAmountAfterTax('1000') => ${getAmountAfterTax('1000')} <br>
Приклад 2 : getAmountAfterTax('5500') => ${getAmountAfterTax('5500')}`;

document.getElementById('decision_5').innerHTML = `
Приклад 1 : getRandomNumber(0, 50) => ${getRandomNumber(0, 50)} <br>
Приклад 2 : getRandomNumber(5, 10) => ${getRandomNumber(5, 10)}`;

document.getElementById('decision_6').innerHTML = `
Приклад 1 : countLetter("с","Створити функцію, яка рахує скільки разів певна буква повторюється в слові") => ${countLetter("с","Створити функцію, яка рахує скільки разів певна буква повторюється в слові")} <br>
Приклад 2 : countLetter('a', 'Асталавіста') => ${countLetter('а', 'Асталавіста')}`;

document.getElementById('decision_7').innerHTML = `
Приклад 1 : convertCurrency("1000$") => ${convertCurrency("1000$")} <br>
Приклад 2 : convertCurrency("1000UAH") => ${convertCurrency("1000UAH")} <br>
Приклад 3 : convertCurrency("1000ru") => ${convertCurrency("1000ru")}`;


document.getElementById('decision_8').innerHTML = `
Приклад 1 : getRandomPassword(10) => ${getRandomPassword(10)} <br>
Приклад 2 : getRandomPassword(4) => ${getRandomPassword(4)} <br>
Приклад 3 : getRandomPassword() => ${getRandomPassword()}`;


console.log(`Функція No1: getMaxDigit(167523456) => ${getMaxDigit(167523456)},`,`Функція No2: raiseNumberPower(6, 3) => ${raiseNumberPower(6, 3)},`,
`Функція No3: formatsName('  влАД   ') => ${formatsName('  влАД   ')},`,
`Функція No4: getAmountAfterTax('1000') => ${getAmountAfterTax('1000')},`,
`Функція No5: getRandomNumber(5, 10) => ${getRandomNumber(5, 10)},`,
`Функція No6: countLetter("а","Створити функцію, яка рахує скільки разів певна буква повторюється в слові") => ${countLetter("а","Створити функцію, яка рахує скільки разів певна буква повторюється в слові")},`,
`Функція No7-8: convertCurrency("1000$") => ${convertCurrency("1000$")},`,
`Функція No9: getRandomPassword(10) => ${getRandomPassword(10)}.`
)