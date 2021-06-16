const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


const pairs = getPairs(students);
const pairsStudentsTheme = getPairsStudentTheme(pairs, themes);
const studentsMarks = getStudentsMarks(students, marks);
const pairsMarks = getMarkForPairs(pairsStudentsTheme);


// Задача №01 
// Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]]; 

function getPairs(arr) {
    const newArrayStudents = [...arr];
    
    const studentsPairsArray = [
        [newArrayStudents[0], newArrayStudents[2]], 
        [newArrayStudents[1], newArrayStudents[3]],
        [newArrayStudents[4], newArrayStudents[5]],
    ];
    return studentsPairsArray;
}



// Задача №02
// Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]

function getPairsStudentTheme(arr1, arr2) {
    const cloneArr1 = []; 

    // клонуємо багаторівневий масив    
    for (let i = 0; i < arr2.length; i++) {
        cloneArr1[i] = arr1[i].slice();
    }
    
    const pairsStudentsTheme = cloneArr1;
    // перетворюємо пари з елементів масиву у строку
    for (let k = 0; k < arr2.length; k++) {
        pairsStudentsTheme[k] = [`${cloneArr1[k][0]} і ${cloneArr1[k][1]}`];
    }

    // добавляємо предмети як елементи підмасиву
    for (let j = 0; j < arr2.length; j++) {
        pairsStudentsTheme[j].push(arr2[j]);
    }
    return pairsStudentsTheme;
}



// Задача №03
// Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

function getStudentsMarks(arr1, arr2) {
    const studentsMarksArray = [];
    for (let i = 0; i < arr1.length; i++) {
        studentsMarksArray[i] = [arr1[i], arr2[i]];
    }
    return studentsMarksArray;
}



// Задача №04 
// Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

function getMarkForPairs(arr1) {
    const cloneArr1 = []; 

    // клонуємо багаторівневий масив    
    for (let i = 0; i < arr1.length; i++) {
        cloneArr1[i] = arr1[i].slice();
    }

    const pairsMarks = cloneArr1;
    // добавляємо оцінку як елементи підмасиву
    for (let j = 0; j < pairsMarks.length; j++) {
        const randomMark = Math.floor(Math.random() * (4) + 1);
        pairsMarks[j].push(randomMark);
    }
    return pairsMarks;
}



console.log(pairs);
console.log(pairsStudentsTheme);
console.log(studentsMarks);
console.log(pairsMarks);

console.log("=================== КОНТРОЛЬ ВИХІДНІ МАСИВИ НИЖЧЕ =========================");
console.log(students);
console.log(themes);
console.log(marks);

