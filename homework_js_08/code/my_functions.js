// У цьому завданні вам необхідно створити клас Student та розробляти методи всередині цього класу.
// 1.У стдентів повинні бути наступні властивості: university, course, fullName, вони передаються при створенні студента(в конструктор).


// 2. Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.

// 3. Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]

// 4. Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]

// 5. Створіть метод отримання середнього балу this.getAverageMark() -> 4.6

// 6. Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких помилок, просто повертається завжди null замість масиву оцінок)


// 7. Створіть метод this.recover, який дозволить поновити студента.
export class Student{
  
    constructor(university, course, fullName){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [5, 4, 4, 5];
        this.active = true;
    }
    getInfo(){
        return `Студент ${this.course} го курсу ${this.university}, ${this.fullName}`
    }
  
    getAverageMark(){
        if(this.active){
            let mark = 0
            this.marks.forEach((e)=>{
                mark += +e
            })

            return (mark / this.marks.length).toFixed(1)
        }
        else return null
    }

    dismiss(){
        this.active = false;
    }
    recover(){
        this.active = true;
    }

    get getSetMarks(){
        if(this.active){
            return this.marks;
        }
        else return null
    }

    set getSetMarks(value){
        if(this.active){
            this.marks = [...this.marks,+value]
        }
        else return 'null';
    }

}



// Advanced

// 1. Створіть новий клас BudgetStudent, який повністю наслідує клас Student.


export class BudgetStudent extends Student{

    constructor(university, course, fullName){
        super(university, course, fullName)
        setInterval(() => {
            this.getScholarship()
        }, 30000);
    }
    getScholarship(){
        if(this.getAverageMark() > 4 && this.active){
            console.log('Ви отримали 1400 грн. стипендії.')
            return 'Ви отримали 1400 грн. стипендії.'
        }
        else {
            console.log('Ви не отримали стипендії. У вас низький середній  бал')
            return 'Ви не отримали стипендії. У вас низький середній  бал'
        }
    }

}

// 2. Бюджетний студент може отримати стипендію за допомогою методу this.getScholarship. Отримання стипендії супроводжується виведенням інформації в консоль: Ви отримали 1400 грн. стипендії.

// 3. Метод отримання стипендії автоматично викликається кожні 30 секунд післе створення об'єкту. Підказка: викликайте його в constructor.

// 4. Студент отримує стипендію тільки в тому випадку, якщо середній бал у нього вище або дорівнює 4.0


// 5. Якщо студента виключено, він не отримує стипендію (думаю це було і так очевидно :) )
