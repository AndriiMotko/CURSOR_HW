const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const pairs = getPairs(students);
const pairsStudentsTheme = getPairsStudentTheme(pairs, themes);

// Задача №01 
// Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]]; 

function getPairs(arr) {
    const newArrayStudents = [].concat(arr);
    
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
    
    const pairsStudentsAndTheme = [].concat(arr1);

    for(let i = 0; i < pairsStudentsAndTheme.length; i++) {
        pairsStudentsAndTheme[i].push(arr2[i]);
    }
    return pairsStudentsAndTheme;
}


console.log("_______________________________________________________");
console.log(pairs);
console.log(pairsStudentsTheme);

console.log(students);
console.log(themes);

