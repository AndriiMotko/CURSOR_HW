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

export default countLetter;
