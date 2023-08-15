// У цьому домашньому завданні вам необхідно зробити мінімум 6
// функцій (на вибір)

// (!) У функціях не потрібно виводити ніяких даних, вони мають бути
// чистими, по можливості.

// Після чого в кінці ДЗ потрібно обернути виклик ваших функцій в
// console.log або document.writeln.

// Приклад: Ваша функція об'явлена десь const myFunc = () => { ...}, в
// кінці вашого ДЗ ви виводите результат виклику
// document.writeln(`Функція No1: ${myFunc("аргументи, якщо є")}`)

// 1. Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.

// Приклади: 1236 -> 6, 987 -> 9, 385 -> 8

export function getMaxDigit(number) {
    const str = String(number);
    let numMax = 0;

    for (let i = 0; i < str.length; i++){

        if (numMax < str[i]) {
            numMax = str[i];
        }
    };
    return numMax;
};



// 2. Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **.
export function raiseNumberPower(num, pow) {
    let result = 1;

    if (pow > 0) {

        for (let i = 0; i < pow; i++){
            result *= num;
        } 
    }
    else if (pow < 0) {

        for (let i = 0; i > pow; i--){
            result /= num;
        }
    }
    return result;
};

// 3. Створити функцію, яка форматує ім'я, роблячи першу букву великою. 
//("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
export function formatsName(param='') {
    const string = param.trim();
    let newStr = '';

    for (let i = 0; i < string.length; i++){

        if (i === 0) {
            newStr = string[i].toUpperCase();
        }
        else {
           newStr += string[i].toLowerCase();
        }
    }

    return newStr;
};



// 4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. 
//(Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805

export const getAmountAfterTax = (num) =>{
    return (num - (num / 100) * 19.5).toFixed(2);
};


// 5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
// Приклад: getRandomNumber(1, 10) -> 5 
export const getRandomNumber = (numMin, numMax) =>{
    return  Math.floor(Math.random() * (numMax - numMin) + numMin);
};

// 6. Створити функцію, яка рахує скільки разів певна буква повторюється в слові.
// Приклад: countLetter("а", "Асталавіста") -> 4

export function countLetter(letter, word){
    let caunt = 0;
    
    for(let i = 0; i < word.length; i++){
        if(word[i].toLowerCase() === letter.toLowerCase()){
            caunt += 1;
        };
    };

    return caunt;
}


// 7 - 8. Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.

// Приклад: convertCurrency("100$") -> 2500 грн. або
// convertCurrency("2500UAH") -> 100$
export function convertCurrency(str){
    const validate = (string, patern) => {return patern.test(string)};
    const rate = 35.4;
    const num = parseFloat(str);
    let result ='';
    
    if(validate(str, /\$/g)){
        result = `${str}  =  ${(num * rate).toFixed(2)} Грн.`;
    }
    else if(validate(str,  /uah/ig)){
        result = `${str}  =  ${(num / rate).toFixed(2)} $.`;
    }
    else {
        result = `Нажаль в нас немає такої валюти.`;
    };
   
    return result;

};



// 9. Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.

// Приклад: getRandomPassword(4) -> 1875, getRandomPassword() ->
// 87240124
export function getRandomPassword(num = 8){
    const numbers = '0123456789';
    let result = '';

    for(let i = 0; i < num; i++){
        result += numbers[Math.floor(Math.random() * numbers.length)]
    }

    return result
}





// 10. Створіть функцію, яка видаляє всі букви з речення.
// Приклад: deleteLetters('a', "blablabla") -> "blblbl"




// 11. Створіть функцію, яка перевіряє, чи є слово паліндромом.
// Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false,
// isPalyndrom("Я несу гусеня") -> true



// 12. Створіть функцію, яка видалить з речення букви, які
// зустрічаються більше 1 разу.
// Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") ->
// "сктдеим