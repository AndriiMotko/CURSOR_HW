// Функція #01 
// Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8 

function getMaxDigit(number) {
    number = (Number.parseInt(number)).toString(); 
    let maxNumber = 0;
    for(let i = 0; i < number.length; i++) {
        if(maxNumber < number[i]) {
            maxNumber = number[i];
        } else {
            continue;
        }
    }
    return maxNumber;
}

// Функція #02
// Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл

function getNumbertoPower(number, power) {
    let numbertoPowerResult = 1;

    if (number < 0 || number > 0) {
        if(power > 0) {
            for(let i = 0; i < power; i++) {
                numbertoPowerResult = numbertoPowerResult * number;
            }
        } else if (power < 0) {
            for(let i = 0; i > power; i--) {
                numbertoPowerResult = (numbertoPowerResult * number);
            }
            return 1/numbertoPowerResult;
        } else {
            return 1;
        }
    } else if(number === 0) {
        if(power > 0) {
            return 0;
        } else if (power < 0) {
            return "неприпустиме значення";
        } else {
            return 1;
        }
    } 
    return numbertoPowerResult;
 } 

// Функція #03
// Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);

function setFirstLetterOfNameToBig(name) {
    return (name[0].toUpperCase() + name.slice(1).toLowerCase());
}

// Функція #04 
// Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805 

function getSalaryWithoutTax(salary) {
    const taxIndex = 19.5;
    const salaryWithoutTax = salary - salary*(taxIndex/100);
    return salaryWithoutTax;
}

// Функція #05
// Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5 

function getRandomNumber(n, m) {
    n = Math.ceil(n);
    m = Math.floor(m);
    return Math.floor(Math.random() * (m - n) + n);
}

// Функція #06 
// Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4

function countLetter(letter, word) {
    let countLetter = 0;
    word = word.toLowerCase();
    for(let i = 0; i < word.length; i++) {
       if(letter === word[i]) {
           countLetter++;
       }
    }
    return countLetter;
}

// Функція #07 
// Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$

function convertCurrency(sum) {
    if(sum.includes("$")) {
        const sumToNumber = Number(sum.slice(0, -1));
        return `${sumToNumber * 25} грн.`;
    } else if(sum.toLowerCase().includes("uah")) {
        const sumToNumber = Number(sum.slice(0, -3));
        return `${sumToNumber / 25} $.`;
    } else {
        return sumToNumber = "You write uncorrect value!"
    }
}

// Функція #08
// Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.

function getRandomPassword(passLength = 8) {
    const maxValue = Math.pow(10, passLength);
    const minValue = Math.pow(10, passLength - 1);
    return Math.floor(Math.random() * (maxValue - minValue) + minValue) ;
}

// Функція #09
// Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"

function deleteLetters(letter, sentence) {
    const sentenceToArray = sentence.split("");
    for(let i = 0; i < sentenceToArray.length; i++) {
        if(sentenceToArray[i] === letter) {
            sentenceToArray.splice( i, 1);
        }
    }
    return sentenceToArray.join("");
}

// Функція #10 
// Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true

function isPalyndrom(string) {
    const stringWithoutGaps = string.split(" ").join("").toLowerCase();
    const stringWithoutGapsReverse = stringWithoutGaps.split("").reverse().join("");
    if(stringWithoutGaps === stringWithoutGapsReverse) {
        return true;
    } else {
        return false;
    }
}

// Функція #11
// Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим"

function deleteDuplicateLetter(string) {
    string = string.toLowerCase(); // приводимо рядок до нижнього регістру
    const stringToArray = string.split(""); // створюємо масив букв які будемо перебирати

    // створюємо цикл перебору букв вихідного String-а (які не міняються)
    for (let i = 0; i < stringToArray.length; i++) {
        let countRepeats = 0;

        // створюємо цикл що шукатиме дубльовані букв і видалятиме їх
        for (let j = 0; j < string.length; j++) {
            if(string[j] === stringToArray[i]) {
                countRepeats++;

                if(countRepeats > 1) {
                    string = string.split("");
                    for (let k = 0; k < string.length; k++) {
                        if (string[k] === stringToArray[i]) {
                            string.splice( k, 1);
                            k--;
                        }
                    }
                    string = string.join("");
                }
            }
        }
    }
    return string;
}


// ======================= ВИВЕДЕННЯ УСІХ ФУНКЦІЙ ===============================

console.log(`Функція №1 : ${getMaxDigit(1236)}`); 

console.log(`Функція №2 :                           
             2^3     = ${getNumbertoPower(2, 3)};
             2^(-3)  = ${getNumbertoPower(2, -3)};
             2^0     = ${getNumbertoPower(2, 0)}
             0^0     = ${getNumbertoPower(0, 0)}
             0^2     = ${getNumbertoPower(0, 2)}
             0^(-1)  = ${getNumbertoPower(0, -1)}
             -2^(3)  = ${getNumbertoPower(-2, 3)}
             -2^(-3) = ${getNumbertoPower(-2, -3)}
             -2^0    = ${getNumbertoPower(-2, 0)} `); 

console.log(`Функція №3 : ${setFirstLetterOfNameToBig("vLaD")}`); 

console.log(`Функція №4 : ${getSalaryWithoutTax(1000)}`); 

console.log(`Функція №5 : ${getRandomNumber(1, 10)}`); 

console.log(`Функція №6 : ${countLetter("а", "Асталавіста")}`);

console.log(`Функція №7 : ${convertCurrency("2500uAh")}`);

console.log(`Функція №8 : ${getRandomPassword(12)}`);

console.log(`Функція №9 : ${deleteLetters("a", "bla bla bla")}`);

console.log(`Функція №10 : ${isPalyndrom("Я несу гусеня")}`);

console.log(`Функція №11 : ${deleteDuplicateLetter("Бісквіт був дуже ніжним")}`);

