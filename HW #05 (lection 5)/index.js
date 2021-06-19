// Задача №01 =========================================================================

function getRandomArray(length, min, max) {
    const numbersRandomArray = [];
    for (let i = 0; i < length; i++) {
        numbersRandomArray[i] = Math.floor(Math.random() * (max - min) + min);
    }
    return numbersRandomArray;
}

// Задача №02 ==========================================================================

function getModa(...numbers) {
    numbers = numbers.filter(number => Number.isInteger(number));
    numbers.sort((a, b) => a - b);

    let cloneNumbers = [...numbers];
    const arrayOfRepeatedNumbers = [];
    let subarrayOfRepeatedNumbers;
    
    // створюємо цикл де будемо шукати повторювані числа і закидати їх в новий масив
    for (let i = 0; i < numbers.length; i++) {
        const lastIndexOfNumber = cloneNumbers.lastIndexOf(cloneNumbers[0]);
        
        if (lastIndexOfNumber > 0) {
            subarrayOfRepeatedNumbers = cloneNumbers.slice(0, lastIndexOfNumber + 1);
        } else if (lastIndexOfNumber === 0) {
            subarrayOfRepeatedNumbers = cloneNumbers.slice(0, 1);
        } else {
            break;
        }
        
        arrayOfRepeatedNumbers.push(subarrayOfRepeatedNumbers);
        cloneNumbers.splice(0, subarrayOfRepeatedNumbers.length);
    }
    
    // з масиву повторюваних чисел, через порівняння довжин підмасивів знаходимо МОДУ
    let findIndex;
    let maxLength = 0;
    for (let j = 0; j < arrayOfRepeatedNumbers.length; j++) {
        if (arrayOfRepeatedNumbers[j].length > maxLength) {
            maxLength = 2;
            findIndex = j;
        } else {
            continue;
        }
    }

    return arrayOfRepeatedNumbers[findIndex][0];  
}


//======================= РЕЗУЛЬТАТИ ==============================
console.log("Задача №01", getRandomArray(15, 1, 100));
console.log("Задача №02", getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));