import { 
    getSubjects,
    getAverageMark,
    getStudentInfo,
    getStudentsNames,
    getBestStudent,
    calculateWordLetters,
} from './my_functions.js';


// Масив студентів.
const students = [
    {
        name: "Tanya",
        course: 3,
        subjects: {
            math: [4, 4, 3, 4],
            algorithms: [3, 3, 3, 4, 4, 4],
            data_science: [5, 5, 3, 4]
        }
    }, 
    {
        name: "Victor",
        course: 4,
        subjects: {
            physics: [5, 5, 5, 3],
            economics: [2, 3, 3, 3, 3, 5],
            geometry: [5, 5, 2, 3, 5]
        }
    }, 
    {
        name: "Anton",
        course: 2,
        subjects: {
            statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
            english: [5, 3],
            cosmology: [5, 5, 5, 5]
        }
    }
];


// Вивід прикладів на сторінку.

document.getElementById('decision_1').innerHTML =
    `getSubjects(students[0]) =>  ${getSubjects(students[0])} <br>
    getSubjects(students[1]) => ${getSubjects(students[1])} <br> 
    getSubjects(students[2]) => ${getSubjects(students[2])} `;


document.getElementById('decision_2').innerHTML =
    `getAverageMark(students[0]) => Середня оцінка : ${getAverageMark(students[0])} бали.<br>
    getAverageMark(students[1]) => Середня оцінка : ${getAverageMark(students[1])} бали. <br> 
    getAverageMark(students[2]) => Середня оцінка : ${getAverageMark(students[2])} бали.`;


document.getElementById('decision_3').innerHTML =
    `getStudentInfo(students[0]) =>  ${getStudentInfo(students[0])} <br>
    getStudentInfo(students[1]) => ${getStudentInfo(students[1])} <br> 
    getStudentInfo(students[2]) => ${getStudentInfo(students[2])} `;


document.getElementById('decision_4').innerHTML =
    `getStudentsNames(students) => [ ${getStudentsNames(students).join(', ')} ]`;


document.getElementById('decision_5').innerHTML =
    `getBestStudent(students) => ${getBestStudent(students)}`;


const res = Object.entries( calculateWordLetters("тест"))
    .map((el)=>{
        return el.join(':')
    })
    .join(', ');


document.getElementById('decision_6').innerHTML =
    `calculateWordLetters("тест") => { ${res} }`;
