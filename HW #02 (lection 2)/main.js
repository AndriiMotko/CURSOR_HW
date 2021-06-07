// Отримуємо від користувача строку N, конвертуємо її в число, перевіряємо на NAN
let n = Number.parseInt(prompt("Please enter First Number", ""));
while (isNaN(n)) {
    n = Number(prompt("Please enter First Number AGAIN (not a word!)", ""))
}

// Отримуємо від користувача строку M, конвертуємо її в число, перевіряємо на NAN
let m = Number.parseInt(prompt("Please enter Second Number", ""));
while (isNaN(m)||(m<n)) {
    m = Number(prompt("Please enter Second Number AGAIN (It must be not a word and bigger than First Number!)", ""))
}

// Запитуємо користувача чи пропускати парні числа
const missEvenNumbers = confirm("Enter 'OK' if you want to miss Even numbers and 'Cancel' if not");

// Створюємо цикл складання чисел від N до M з урахуванням пропуку/непропуску парних чисел
let sum = 0;

for (n; n<=m; n++) {
    if((n%2 == 0)&&(missEvenNumbers)) {
        continue;
    } else {
    sum = sum + n;
    }
}
console.log(sum);