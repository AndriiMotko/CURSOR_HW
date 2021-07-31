
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

    return chineseCharacters;
}

export default getRandomChinese;


