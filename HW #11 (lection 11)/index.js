function getLenghtFromUser() {
    let lenght = prompt("Please enter a  integer LENGTH of string of Chinese characters", 4);
    while (!Number.isInteger(lenght) && lenght == 0) { 
        lenght = prompt("You enter incorrect value. Try again...", 4);
    }
    return lenght;
}

async function getRandomChinese(length) {
    let chineseCharacters = "";
    
    while (length > 0) {
        let character = new Promise(resolve => {
            const getUTF = Number(Date.now().toString().slice(-5));
            const getSignFromUTF = String.fromCharCode(getUTF);
            setTimeout(() => resolve(getSignFromUTF), 50);
            length--;
        });

        chineseCharacters += await character;
    }

    return alert(chineseCharacters);
}

getRandomChinese(getLenghtFromUser());


