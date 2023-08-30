// Зродіть 25 квадратів розміру 50х50 пікселів кожен, зафарбовані у випадковий колір. Квадрати мають розташовуватись по 5 в ряд. Щоб квадрати з'явились на сторінці, необхідно викликати функцію generateBlocks(); 

// Функція повертає елемент по Selector
function $(selector){
    return document.querySelector(selector)
}

// Функція рандомного числа.
export const numRandom = () => {
    return Math.floor(Math.random() * 255)
}

// Функція рандомного кольру rgb.
const colorRandom = (num= ()=>{}) => {
    return `rgb(${num()}, ${num()}, ${num()})`
}

// Функція створеня елементу рандомного кольру rgb.
const createElem = () => {
   return `<div 
            class="element"
            style="background-color: ${colorRandom(numRandom)} ;">
       </div>`
}

// Функція виводу елементів на сторінку.
export function generateBlocks(element='#decision_2'){
    for (let i = 0; i < 25; i++) {
        $(element).insertAdjacentHTML("beforeend", createElem())
    }
}
    

// Advanced
// Зробіть так, щоб квадрати змінювали колір раз на секунду. Щоб квадрати з'явились на сторінці та почали змінюватись, необхідно викликати функцію generateBlocksInterval();

// Функція виводу елементів на сторінку.
export function generateBlocksInterval(){
    setInterval(() => {
        $("#decision_4").innerHTML = '';
            for (let i = 0; i < 25; i++) {
                $("#decision_4").insertAdjacentHTML("beforeend", createElem())
            }
    }, 1000); 
}