import { 
    getMyTaxes,
    getMiddleTaxes,
    getTotalTaxes,
    getMySalary,
} from './my_functions.js';


// Створіть 3 об'єкти, що описують країни:

const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


// Вивід прикладів на сторінку.

document.getElementById('decision_1').innerHTML =
    `getMyTaxes.call(ukraine, 1000)) =>  ${getMyTaxes.call(ukraine, 1000)} <br>
    getMyTaxes.call(latvia, 1000) => ${getMyTaxes.call(latvia, 1000)} <br> 
    getMyTaxes.call(litva, 1000) => ${getMyTaxes.call(litva, 1000)} `;


document.getElementById('decision_2').innerHTML =
    `getMiddleTaxes.call(ukraine)) =>  ${getMiddleTaxes.call(ukraine)} <br>
    getMiddleTaxes.call(latvia) => ${getMiddleTaxes.call(latvia)} <br> 
    getMiddleTaxes.call(litva) => ${getMiddleTaxes.call(litva)} `;


document.getElementById('decision_3').innerHTML =
    `getTotalTaxes.call(ukraine)) =>  ${getTotalTaxes.call(ukraine)} <br>
    getTotalTaxes.call(latvia) => ${getTotalTaxes.call(latvia)} <br> 
    getTotalTaxes.call(litva) => ${getTotalTaxes.call(litva)} `;

setInterval(() => {
    getMySalary.call(ukraine)
    getMySalary.call(latvia)
    getMySalary.call(latvia)
}, 10000);