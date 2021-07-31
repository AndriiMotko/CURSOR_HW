const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


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

export {getPairs, students};