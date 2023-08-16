// Кожне завдання виконується у вигляді чистої функції.

// Функція повертає масив або інше значення, але не змінює його!
// У консоль/html виводите результат виклику функції:
// const pairs = getPairs(students);
// console.log(pairs);


// 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом.

// У вас повинен вийти вкладений масив з парами студентів:
// [["Олександр", "Олена"], [..], [...]];

export function getPairs(arr){
    const men = [];
    const women = [];
    const newArr = []
    for (let i of arr) {
        if(i.endsWith('а')){
            women.push(i)
        }
        else {
            men.push(i)
        }
    }

    for(let i =0; i < men.length; i++){
        newArr.push([men[i],women[i]])
    }
    return newArr
}



// 2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.
// Повинен вийти вкладений масив виду: [["Олександр і Олена","Теорія автоматів"], [...], [...]]

export function getStudentsProjects(arrStud, arrProj){
    const newArr = []
    for (let i = 0; i < arrStud.length; i++) {
        newArr.push([`${arrStud[i][0]} та ${arrStud[i][1]}`, arrProj[i]]);
    }

    return newArr;
}



// 3. Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

export function getStudentMark(arrStud, arrMarks){
    const newArr = [];
    for(let i = 0; i < arrStud.length; i++){
        newArr.push([arrStud[i],arrMarks[i]]);
    }

    return newArr;
}


// 4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт (тут функція буде не чистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

export function getPairMark(arrStud){
    const newArr = [];

    for (let arr of arrStud) {
        newArr.push([...arr, Math.floor(Math.random() * 5 + 1)]);
    }

    return newArr;
}