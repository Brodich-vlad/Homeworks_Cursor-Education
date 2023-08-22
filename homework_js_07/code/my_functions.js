
// 1. Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this.

export function  getMyTaxes(num){
    return (this.tax * num).toFixed(2);
}

// 2. Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this.

export function getMiddleTaxes(){
    return (this.tax * this.middleSalary).toFixed(2);
}


// 3. Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this.

export function getTotalTaxes(){
    return (this.tax * this.middleSalary * this.vacancies).toFixed(2)
}


// 4. Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary. profit = salary - taxes; для виводу в консоль кожні 10 секунд використайте setInterval

export function getMySalary(){
    const salary = Math.floor(Math.random() * (2000 - 1500) + 1500);
    const taxes = this.tax * salary;
    const profit = salary - taxes;

    const resObj = {
        salary: salary,
        taxes: +taxes.toFixed(2), 
        profit: +profit.toFixed(2),
    }

    console.log(resObj)
}
