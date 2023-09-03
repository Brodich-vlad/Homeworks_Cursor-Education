// Вам необхідно виконати завдання з популярного циклу челенджів: JS30. https://javascript30.com/
// (Радимо після курсу – пройти його повністю, він безкоштовний)

// Необхідно написати програму, яка буде зчитувати з клавіатури натискання клавіш та відтворювати унікальний звук для кожної клавіши (клавіши можуть бути будь-які, звуки можуть бути будь-які, тільки вкажіть у верстці – які кнопки натискати).https://www.freesfx.co.uk/Category/Bass/272

// Функція пошуку елемента.
export const myGetElement = (select) => {
    return document.querySelector(select)
}

// Функція перевірки елемента повертає відповідну мелодію.
export const getSrc = (key) => {
    switch (key) {
        case 'KeyC':
            return "./audio/zvuk-notyi-do.mp3";

        case 'KeyD':
            return "./audio/zvuk-notyi-re.mp3";
        
        case 'KeyE':
            return "./audio/zvuk-notyi-mi.mp3";
        
        case 'KeyF':
            return "./audio/zvuk-notyi-fa.mp3";
        
        case 'KeyG':
            return "./audio/zvuk-notyi-sol.mp3";
        
        case 'KeyA':
            return "./audio/zvuk-notyi-lya.mp3";
 
        case 'KeyB':
            return "./audio/zvuk-notyi-si.mp3";
        
        default:
            break;
    }
};             
