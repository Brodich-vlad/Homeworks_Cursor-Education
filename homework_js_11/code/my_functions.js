// Створіть функцію, яка повертає проміс getRandomChinese(length).

// Функція працює таким чином: Запускається цикл (підказка: можна використовувати while) length раз, кожен прохід циклу дивимось на останні 5 цифр результату виклику методу Date.now()
// Наприклад отримали const sign = 16086;.
// Конвертуємо отриману цифу в рядок String.fromCharCode(sign);
// та чекаємо 50 ms
// Функція gerRandomChinese(length) повинна повернути рядок довжиною (length) з китайськими ієрогліфами.
// Час роботи проміса має складати length * 50ms.
// (Якщо викликати getRandomChinese(4), отримаємо результат "촛 궻 簽 紙" за 200ms.

export function getRandomChinese(length){
    let caunt = 0;
    let res = [];
    return new Promise((resolve) => {

        while (caunt < length) {
            setTimeout(() => {
                const sign = Date.now() % 100000;
                res.push(String.fromCharCode(sign)) 
                if(res.length === length){
                    resolve(res.join(' '));
                }
            }, 50);
            caunt++;
        }
    });
};

// Функція пошуку елемента.
export const myGetElement = (select) => {
    return document.querySelector(select)
}
