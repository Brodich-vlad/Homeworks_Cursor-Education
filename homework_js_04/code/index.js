import { 
    getPairs,
    getStudentsProjects,
    getStudentMark,
    getPairMark,
} from './my_functions.js';


// Перед виконанням цього домашнього завдання необхідно створити 3 масиви:

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми та структури даних"];

const marks = [4, 5, 5, 3, 4, 5];


const pairs = getPairs(students);

const studentsProjects =  getStudentsProjects(pairs, themes);

const studentMark = getStudentMark(students, marks);

const pairMark = getPairMark(studentsProjects);

console.log(pairs);

console.log(studentsProjects);

console.log(studentMark);

console.log(pairMark);

document.getElementById('decision_1').innerHTML = `Пара 1 :  ${pairs[0].join(' та ')} <br>
    Пара 2 : ${pairs[1].join(' та ')} <br> 
    Пара 3 : ${pairs[2].join(' та ')} `;

document.getElementById('decision_2').innerHTML = `Пара 1 :  ${studentsProjects[0].join(' - ')} <br>
    Пара 2 : ${studentsProjects[1].join(' - ')} <br> 
    Пара 3 : ${studentsProjects[2].join(' - ')} `;    

document.getElementById('decision_3').innerHTML = `${studentMark.join('  ')} <br>`;    

document.getElementById('decision_4').innerHTML = `Пара 1 :  ${pairMark[0].join(' - ')} <br>
    Пара 2 : ${pairMark[1].join(' - ')} <br> 
    Пара 3 : ${pairMark[2].join(' - ')} `;