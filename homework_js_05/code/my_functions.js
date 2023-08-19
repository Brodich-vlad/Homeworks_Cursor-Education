// У цьому домашньому завданні вам необхідно зробити мінімум 6 функцій (на вибір)

//    1.  Створіть функцію getRandomArray(length, 1. min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: length -довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа.

//     Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]

export function getRandomArray(length, min, max) {
    const newArr = [];

    for (let i = 0; i < length; i++){
        newArr.push(Math.floor(Math.random() * (max - min) + min + 1))
    }

    return newArr
}

// 2. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ.
//  Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4
export function getAverage(...numbers) {
    let res = 0;

    numbers.forEach((el) => {
        if (Number.isInteger(el)) {
            res +=el
        } 
    })
    return res / numbers.length;  
}

//  3. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції.
//     Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]

export function filterEvenNumbers(...numbers) {
    const res = numbers.filter((el) => {
        if(el%2===1) {return el}
    })

    return res;
}

//  4. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших за 0.
//  Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3

export function countPositiveNumbers(...numbers) {
    let caunt = 0;
    numbers.forEach((el) => {
        if (el > 0) { caunt += 1 };
    })
    return caunt;
}

// 5. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
//  Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]

export function getDividedByFive(...numbers) {
    const res = numbers.filter((el) => {
        if(el % 5 === 0){ return el }
    })
    return res;
}

// 6. Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), після чого масив необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати cписок цих слів у майбутньому.

//  Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing kidding?" Приклад: replaceBadWords("Holy shit!") -> "Holy ***!" Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"

export function replaceBadWords(string, badWordsArray) {

    const replacer = (word) => {
        for (let i = 0; i < badWordsArray.length; i++) {
            const badWord = badWordsArray[i];
            if (word.includes(badWord)) {
            return replacer(word.replace(badWord, '*'.repeat(badWord.length)))
            }
        }
            return word;
        }
    const res = string.split(' ').map((word) => {
        return replacer(word)
    }).join(' ')

    return  res
}
