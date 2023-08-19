import { 
    getRandomArray,
    getAverage,
    filterEvenNumbers,
    countPositiveNumbers,
    getDividedByFive,
    replaceBadWords,
} from './my_functions.js';


// Вивід прикладів на сторінку.

document.getElementById('decision_1').innerHTML =
    `getRandomArray(5, 30, 40) => [ ${getRandomArray(5, 30, 40).join(', ')} ] <br>
    getRandomArray(15, 1, 100) => [ ${getRandomArray(15, 1, 100).join(', ')} ]`;


document.getElementById('decision_2').innerHTML =
    `getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) => ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}<br>
    getAverage(6.1, 2, 55.5, 11.1, 78) => ${getAverage(6.1, 2, 55.5, 11.1, 78)}`;


document.getElementById('decision_3').innerHTML =
    `filterEvenNumbers(1, 2, 3, 4, 5, 6) => [ ${filterEvenNumbers(1, 2, 3, 4, 5, 6).join(', ')} ]`;


document.getElementById('decision_4').innerHTML =
    `countPositiveNumbers(1, -2, 3, -4, -5, 6) => ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}<br>
    countPositiveNumbers(7, 2, 3, -4, -5, 6) => ${countPositiveNumbers(7, 2, 3, -4, -5, 6)}`;


document.getElementById('decision_5').innerHTML =
    `getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) => [ ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2).join(', ')} ]`;


// Масив поганих слів.    
const badWordsArray = ["shit", "fuck"];
 
document.getElementById('decision_6').innerHTML =
    `replaceBadWords('Are you fucking kidding?',badWordsArray) => ${replaceBadWords('Are you fucking kidding?',badWordsArray)}<br>
    replaceBadWords("It's bullshit!",badWordsArray) => ${replaceBadWords("It's bullshit!",badWordsArray)}`;
