
// 1. Створіть 3 змінних з наступими значеннями: 15.678, 123.965, 90.2345

const apple = 15.678;

const pineapple = 123.965;

const banana = 90.2345;

const totalPrice = apple  + pineapple + banana;

//2. Використовуючи вбудований об'єкт Math – виведіть максимальне число.
// Округлення чила в більшу сторону.
console.log(`Яблуко макс.ціна:${Math.ceil(apple)}грн.`);
console.log(`Ананас макс.ціна:${Math.ceil(pineapple)}грн.`);
console.log(`Банан макс.ціна:${Math.ceil(banana)}грн.`);

//3. Використовуючи вбудований об'єкт Math – виведіть мінімальне число.
// Округлення чила в меньшу сторону.
console.log(`Яблуко мін.ціна:${Math.floor(apple)}грн.`);
console.log(`Ананас мін.ціна:${Math.floor(pineapple)}грн.`);
console.log(`Банан мін.ціна:${Math.floor(banana)}грн.`);

//4. Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму.
// Загальна сумма з копійками.
console.log(`Загальна сума з копійками:${totalPrice}грн.`)

//5. Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНШУ сторону.
const result_1 =  Math.floor(apple) + Math.floor(pineapple) + Math.floor(banana)

console.log(`Сума округлених цін:${result_1}грн.`)

//6. Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
// Перший варіант.
const result_2 = Math.round(totalPrice / 100) * 100;
console.log(`Сума окрулена до сотень: ${result_2}грн. 1.Через змінну.`);

// Другий варіант.
const MyRound100 = (val) => Math.round(val / 100) * 100;
console.log(`Сума окрулена до сотень: ${MyRound100(result_1)}грн. 2.Через функцію.`);

//7. Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
const result_3 =  Boolean(result_1 % 2);

console.log(`Сума товарів: ${result_1}грн. - є не парною? - ${result_3}`);

//8. Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
console.log(`Решта:500 грн. - ${totalPrice}грн. = ${500 - totalPrice}грн.`);

//9. Виведіть середнє значення цін, округлене до другого знаку після коми.
console.log(`Яблуко округл.ціна:${apple.toFixed(2)}грн.`);
console.log(`Ананас округл.ціна:${pineapple.toFixed(2)}грн.`);
console.log(`Банан округл.ціна:${banana.toFixed(2)}грн.`);

// (Більш складне)
//10. Створіть змінну, в якої збережіть випадкову знижку. (використовуйте функцію Math.random).
 const discount = Math.floor(Math.random()*30 + 1);

// Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
const result_4 = (totalPrice - totalPrice * (discount/100)).toFixed(2)

console.log(`Загальна сума:${totalPrice.toFixed(2)}грн. Знижка:${discount}% До сплати:${result_4}грн.`);

//11. Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?

// (Приклад 1: ціна була 260.66, знижка склала 10%, клієнт заплатив на 26 меньше, собівартість = 260 / 2 -> 130. Чистий прибуток = 130 - 26 -> 104)
// (Приклад 2: ціна була 100, знижка склала 90%, клієнт заплатив на 90 меньше, собівартість = 100 / 2 -> 50. Чистий прибуток = 50 - 90 -> -40)
const profit = ((totalPrice / 2) - totalPrice * (discount / 100)).toFixed(2);

console.log(`Прибуток:${(totalPrice/2).toFixed(2)}грн. - Знижка:${(totalPrice * (discount/100)).toFixed(2)}грн. Чистий прибуток: ${profit}грн.`);

// Advanced
// Створіть шаблонний рядок та виведіть всі обчислення вчинені в Base частині домашнього завдання у вигляді одного рядка наступного вигляду: Максимальна ціна: 9999.99 Мінімальна ціна: 1111.11 Вартість всіх товарів: 1345.66 ...і так далі.

// Виводимо приклади на сторінку.

// Прикла 1.
document.getElementById('decision_1').innerHTML = `
const apple = ${apple}; <br/>
const pineapple = ${pineapple};<br/>
const banana = ${banana};`;

// Прикла 2.
document.getElementById('decision_2').innerHTML = `
    Яблуко макс.ціна : ${Math.ceil(apple)} грн.<br/>
    Ананас макс.ціна : ${Math.ceil(pineapple)} грн.<br/>
    Банан макс.ціна : ${Math.ceil(banana)} грн.`;

// Прикла 3.
document.getElementById('decision_3').innerHTML = `
    Яблуко мін.ціна : ${Math.floor(apple)} грн.<br/>
    Ананас мін.ціна : ${Math.floor(pineapple)} грн.<br/>
    Банан мін.ціна :  ${Math.floor(banana)} грн.`;

// Прикла 4.
document.getElementById('decision_4').innerHTML = `
    Загальна сума з копійками : ${totalPrice} грн.`;

// Прикла 5.
document.getElementById('decision_5').innerHTML = `
    Сума округлених цін : ${result_1} грн.`;

// Прикла 6.    
document.getElementById('decision_6').innerHTML = `
    Сума окрулена до сотень : ${result_2} грн.`;   

// Прикла 7.    
document.getElementById('decision_7').innerHTML = `
    Сума товарів : ${result_1} грн. - є не парною? - ${result_3}`;
    
// Прикла 8.    
document.getElementById('decision_8').innerHTML = `
    Решта : 500 грн. - ${totalPrice} грн. = ${500 - totalPrice}  грн.`;     

// Прикла 9.    
document.getElementById('decision_9').innerHTML = `
    Яблуко округл.ціна : ${apple.toFixed(2)} грн.<br/>
    Ананас округл.ціна : ${pineapple.toFixed(2)} грн.<br/>
    Банан округл.ціна : ${banana.toFixed(2)} грн.`;
  
// Прикла 10.    
document.getElementById('decision_10').innerHTML = `
    Загальна сума  : ${totalPrice.toFixed(2)} грн., Знижка : ${discount} %, До сплати : ${result_4} грн.`;  
 
// Прикла 11.    
document.getElementById('decision_11').innerHTML = `
    Прибуток : ${(totalPrice/2).toFixed(2)} грн. - Знижка : ${(totalPrice * (discount/100)).toFixed(2)} грн. Чистий прибуток : ${profit} грн`;       
