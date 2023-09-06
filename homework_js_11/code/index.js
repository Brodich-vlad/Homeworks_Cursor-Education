import {
   getRandomChinese,
   myGetElement,
} from './my_functions.js';
const elem1 = myGetElement('#decision_1');

const showResult = (el) =>{
    myGetElement('#decision_1').insertAdjacentHTML("beforeend",`getRandomChinese(6)
    .then((res) => {showResult(res)}) => <span>${el}</span>`)
};

getRandomChinese(6)
    .then((res) => {showResult(res)});
