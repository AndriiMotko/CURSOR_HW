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
            maxLength = arrayOfRepeatedNumbers[j].length;
            findIndex = j;
        } else {
            continue;
        }
    }

    const filteredArrayOfRepeatedNumbers = arrayOfRepeatedNumbers.filter(item => item.length === maxLength)
    return filteredArrayOfRepeatedNumbers.length > 1 ? filteredArrayOfRepeatedNumbers.map(item => item[0]): arrayOfRepeatedNumbers[findIndex][0];
}

// Задача №03 ==========================================================================

function getAverage(...numbers) {
    numbers = numbers.filter(number => Number.isInteger(number));
    
    const numbersQuantity = numbers.length;
    const numbersSum = numbers.reduce((sum, item) => sum + item, 0);
    const averageOfNumbers = numbersSum / numbersQuantity;

    return averageOfNumbers;
}

// Задача №04 ==========================================================================

function getMedian(...numbers) {
    numbers = numbers.filter(number => Number.isInteger(number));
    numbers.sort((a, b) => a - b);

    const numbersQuantity = numbers.length;
    let median; 
    if (numbersQuantity % 2 == 0 && numbersQuantity == 2) {
        median = (numbers[0] + numbers[1]) / 2;
    } else if (numbersQuantity % 2 == 0) {
        median = (numbers[(numbersQuantity / 2) - 1] + numbers[numbersQuantity / 2]) / 2;
    } else {
        median = numbers[Math.floor(numbersQuantity / 2)];
    }

    return median;
}

// Задача №05 ==========================================================================

function filterEvenNumbers(...numbers) {
    numbers = numbers.filter(number => number % 2 !== 0);
    return numbers;
}

// Задача №06 ==========================================================================

function countPositiveNumbers(...numbers) {
    numbers = numbers.filter(number => number > 0);
    const positiveNumbersQuantity = numbers.length;
    return positiveNumbersQuantity;
}

// Задача №07 ==========================================================================

function getDividedByFive(...numbers) {
    numbers = numbers.filter(number => number % 5 == 0);
    return numbers;
}

// Задача №08 ==========================================================================

function replaceBadWords(string) {
    const badWordsList = ["shit", "fuck"];
    const stringToArray = string.split(" ");

    for (let i = 0; i < badWordsList.length; i++) {
        let searchedRegExp = badWordsList[i];
        let replacedRegExp = [];
        while (replacedRegExp.length < searchedRegExp.length) {
            replacedRegExp.push("*");
        };
        replacedRegExp = replacedRegExp.join("");
        
       for (let j = 0; j < stringToArray.length; j++) {
            let indexOfBadWord = stringToArray[j].indexOf(searchedRegExp);
            
            if (indexOfBadWord !== -1) {
                stringToArray[j] = 
                stringToArray[j].slice(0, indexOfBadWord) +
                replacedRegExp +
                stringToArray[j].slice((indexOfBadWord + searchedRegExp.length));
            }
        }
    }

    return stringToArray.join(" ");
}

// Задача №09 ==========================================================================

function divideByThree(string) {
    string = string.toLowerCase().split(" ");
    const stringArrayClone = string.map( item => [item]);
    const dividedByThree = [];
    
    for (let i = 0; i < stringArrayClone.length; i++) {
        if (stringArrayClone[i][0].length === 0) {
            continue;
        } 
        else if (stringArrayClone[i][0].length > 0 && stringArrayClone[i][0].length < 3) {
            dividedByThree.push(stringArrayClone[i][0]);
        } 
        else if (stringArrayClone[i][0].length >= 3) {
            let countOfRepeat = Math.ceil(stringArrayClone[i][0].length / 3);
            for (let j = 0; j < countOfRepeat; j++) {
                dividedByThree.push(stringArrayClone[i][0].slice(0, 3));
                stringArrayClone[i][0] = stringArrayClone[i][0].slice(3)
            }
        }
    }

    return dividedByThree;
}



//======================= РЕЗУЛЬТАТИ ==============================
console.log("Задача №01", getRandomArray(15, 1, 100));
console.log("Задача №02", getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log("Задача №03", getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log("Задача №04", getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log("Задача №05", filterEvenNumbers(1, 2, 3, 4, 5, 6));
console.log("Задача №06", countPositiveNumbers(1, -2, 3, -4, -5, 6)); 
console.log("Задача №07", getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
console.log("Задача №08", replaceBadWords("Holy shit!"));
console.log("Задача №09", divideByThree("Commander"));