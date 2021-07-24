function* createIdGenerator() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const idGenerator = createIdGenerator();

// Задача №1 Результати
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);


// ================================= ЗАДАЧА №2 ================================

function* newFontGenerator(size) {
    let result = yield size;
    while (true) {
        if (result === "up") {
            size = size + 2;
            result = yield size;
        } else if (result === "down") {
            size = size - 2;
            if (size < 0) {
                size = 0;
            }
            result = yield size;
        } else result = yield size;
    }
}

const fontGenerator = newFontGenerator(14);
fontGenerator.next();


document.getElementById("fontDown").addEventListener("click", () => {

    document
        .querySelector("p")
        .setAttribute("style", `font-size: ${fontGenerator.next("down").value}px`);
});


document.getElementById("fontUP").addEventListener("click", () => {

    document
        .querySelector("p")
        .setAttribute("style", `font-size: ${fontGenerator.next("up").value}px`);
});