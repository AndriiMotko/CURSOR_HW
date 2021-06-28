class Student {
    constructor (university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this._marks = marks;
    }

    getInfo() {
        return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}.`;
    }
    
    get marks() {
        return this._marks;
    }
    
    set marks(mark) {
        return this._marks.push(mark);
    }

    getAverageMark() {
        const marksSum = this._marks.reduce(
            (sum, currentMark) => {return sum + currentMark}, 0);
        return marksSum / this._marks.length;
    }
}

const ostap = new Student("Вищої Школи Психотерапії м.Одеса", 1,
                          "Остап Родоманський Бендер", [5, 4, 4, 5]);

// ============================= РЕЗУЛЬТАТИ ===================================


console.log(ostap.getInfo());
ostap.marks = 5;
console.log(ostap.marks);
console.log(ostap.getAverageMark());

