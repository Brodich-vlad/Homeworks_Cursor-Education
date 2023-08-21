// У цьому домашньому завданні, ви будете працювати з масивом об'єктів.

// Для початку необхідно створити наступний масив (ви можете його просто скопіювати):





// 1. Створіть функцію getSubjects(students[0]) --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента.

// Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл.

export function getSubjects({ name, subjects }){

    const test = /[-_]/gi;

    const newArr = Object.keys( subjects ).map((el)=>{
        let str = el.replace(test,' ');
        str = str.charAt(0).toUpperCase() + str.slice(1);
        return str;   
    })

    return `${name}  Subjects: ${newArr.join(', ')}`
}



// 2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :)

export function getAverageMark({ subjects }){
    const res = [];
    let caunt = 0;

    Object.values(subjects).forEach((el)=>{
        res.push(...el)
    })

    res.forEach((e)=>{caunt += e})

    return (caunt / res.length).toFixed(2)
}



// 3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). Повинна бути виведена інформація: курс, ім'я, середня оцінка.

export function getStudentInfo(obj){
    return `Студент : ${obj.name}, Курс : ${obj.course}, Середній бал : ${getAverageMark(obj)}`
}


// 4.Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.

export function getStudentsNames(arr){
    return arr.map(({name})=>{return name}).sort();
}


// 5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.

export function getBestStudent(arr){
    const res = arr.map((el)=>{
        return{
            name:el.name,
            mark: Number(getAverageMark(el))
        }
    }).sort((a,b)=>{
        return b.mark - a.mark;
    })

    return res[0].name;
}



// 6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.

export function calculateWordLetters(str){
    const res = {}

    str.split('').forEach((el)=>{
        if(res[el]){
            res[el] += 1
        }
        else  res[el] = 1
    })

    return res;
}
