class Student {
    constructor (university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
        this.isActiveStudent = true;
    }

    getInfo() {
        if (this.isActiveStudent) {
            return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}.`;
        }
        return `Дана особа не навчається Вищому навчальному закладі.`;
    }
    
    get allMarks() {
        if (this.isActiveStudent) {return this.marks;}
        return null;
    }
    
    set mark(number) {
        if (this.isActiveStudent) {return this.marks.push(number);}
        return null;
    }

    getAverageMark() {
        const marksSum = this.marks.reduce(
            (sum, currentMark) => {return sum + currentMark}, 0);
        return marksSum / this.marks.length;
    }

    dismiss() {
        this.isActiveStudent = false;
    }

    recover() {
        this.isActiveStudent = true;
    }

}

class BudgetStudent extends Student {
    constructor (university, course, fullName, marks) {
        
        super(university, course, fullName, marks);
        this.getScholarship = setInterval(() => {
                if (this.getAverageMark() >= 4 && this.isActiveStudent) {
                    console.log(`Ви отримали 1400 грн. стипендії.`);
                }        
            }, 30000);
    }
}
       

const ostap = new Student("Вищої Школи Психотерапії м.Одеса", 1,
                          "Остап Родоманський Бендер", [5, 4, 4, 5]);


// ============================= РЕЗУЛЬТАТИ ===================================


export default ostap;




