import { 
    Student,
    BudgetStudent,

} from './my_functions.js';

const student = new Student('Вищої Школи Психотерапії м.Одеса',1,'Остап Родоманський Бендер')
const student1 = new Student('Вищої Школи Психології м.Київ',2,'Анастасія Степанівна Бендера')


const studentBudget = new  BudgetStudent('Вищої Школи Психотерапії м.Одеса',2,'Василь Родоманський Бендера')

const studentBudget1 = new  BudgetStudent('Вищої Школи Психотерапії м.Київ',4,'Василь Васильович Бендер')

// console.log(student.getInfo())

// console.log(student.getSetMarks)

studentBudget1.getSetMarks = 1
studentBudget1.getSetMarks = 1
// student.getSetMarks = '5'
// console.log(student.getSetMarks)
// console.log(student.getAverageMark())
// student.dismiss()
// student.getSetMarks = '5'
// console.log(student.getSetMarks)
// console.log(student.getAverageMark())

console.log(studentBudget.getScholarship())
console.log(studentBudget1.getScholarship())


// Вивід прикладів на сторінку.

document.getElementById('decision_1').innerHTML =
    `student.getInfo() =>  ${student.getInfo()} <br>
    student1.getInfo() => ${student1.getInfo()} `;


document.getElementById('decision_2').innerHTML =
    `student.getSetMarks =>  ${student.getSetMarks} <br>
    student1.getSetMarks => ${student1.getSetMarks} <br> 
    student.getSetMarks = ${student.getSetMarks = 5} <br>
    student.getSetMarks = ${student1.getSetMarks = 4} <br>
    student.getSetMarks =>  ${student.getSetMarks} <br>
    student1.getSetMarks => ${student1.getSetMarks}
    `;


document.getElementById('decision_3').innerHTML =
    `student.getAverageMark() =>  ${student.getAverageMark()} <br>
    student1.getAverageMark() => ${student1.getAverageMark()} `;


document.getElementById('decision_4').innerHTML =
    `student.getSetMarks =>  ${student.getSetMarks} <br>
    student.dismiss() = ${student.dismiss()} <br>
    student.getSetMarks =>  ${student.getSetMarks} <br>
    student.recover() = ${student.recover()} <br>
    student.getSetMarks =>  ${student.getSetMarks}
    `;