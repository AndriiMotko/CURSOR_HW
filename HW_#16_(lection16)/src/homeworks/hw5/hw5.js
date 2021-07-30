// Задача №03 ==========================================================================

function getAverage(...numbers) {
    numbers = numbers.filter(number => Number.isInteger(number));
    
    const numbersQuantity = numbers.length;
    const numbersSum = numbers.reduce((sum, item) => sum + item, 0);
    const averageOfNumbers = numbersSum / numbersQuantity;

    return averageOfNumbers;
}

export default getAverage;
