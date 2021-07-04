function generateBlocks() {
    const squareQuantity = 25;
    
    const parentSquare = document.createElement('div');
    parentSquare.setAttribute("class", "wrap");
    parentSquare.setAttribute("id", "main");
    document.body.insertAdjacentElement("afterbegin", parentSquare);

    for (let i = 0; i < squareQuantity; i++) {
        const parent = document.getElementById("main");
        const square = document.createElement('div');
        square.setAttribute("class", "square");
        
        const redRGB = Math.floor(Math.random() * 255);
        const greenRGB = Math.floor(Math.random() * 255);
        const blueRGB = Math.floor(Math.random() * 255);
        square.setAttribute("style", `background-color: rgb(${redRGB}, ${greenRGB}, ${blueRGB})`);
        square.setAttribute("id", `${i}`);

        parent.append(square);
    }
}


function generateBlocksInterval() {
    return setInterval (() => {
        const parent = document.getElementById("main");
        
        for (let i = 0; i < parent.childNodes.length; i++) {
            const square = document.getElementById(`${i}`);

            const redRGB = Math.floor(Math.random() * 255);
            const greenRGB = Math.floor(Math.random() * 255);
            const blueRGB = Math.floor(Math.random() * 255);

            square.setAttribute("style", `background-color: rgb(${redRGB}, ${greenRGB}, ${blueRGB})`);

        }
    }, 1000);
}

generateBlocks();
generateBlocksInterval();
