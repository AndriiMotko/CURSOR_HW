let tea =15.678;
let coffee =123.965;
let cake =90.2345;

// Максимальне число
let maxPrice = Math.max(tea, coffee, cake);
console.log(maxPrice);

//Мінімальне число
let minPrice = Math.min(tea, coffee, cake);
console.log(minPrice);

// Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
let allProducts = tea + coffee + cake;
console.log(allProducts);

// Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
let allProductsInt = Math.floor(tea) + Math.floor(coffee) + Math.floor(cake);
console.log(allProductsInt);

//Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
let allProductsTo100 = Math.ceil((allProducts)/100)*100;
console.log(allProductsTo100);

//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
let ifPriceOFAllProductsIsPair = function() {
    if ((Math.floor(allProducts)%2 == 0)) {
        return true;
    } else {
        return false;
        }
    };
console.log(ifPriceOFAllProductsIsPair());

//Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
let restFromAllProducts = 500-allProducts;
console.log(restFromAllProducts);

//Виведіть середнє значення цін, округлене до другого знаку після коми
let averageCostOfProducts = ((allProducts)/3).toFixed(2);
console.log(averageCostOfProducts);

//===============================================================================================
//(Більш складне) Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
//Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
//Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?

let discount = Math.random(); // рандомна знижка у вигляді коефіціенту, наприклад 0,12 ~ 12%;
let allProductsWithDiscout = (allProducts - allProducts*discount).toFixed(2); // рахуємо суму зі знижкою;

console.log(`Price with discount will be: ${allProductsWithDiscout};`);

let cost = allProducts/2; // собівартість = сума товарів без знижки / 2 ;
let profit = (cost - (allProducts*discount)).toFixed(2); // чистий прибуток = собівартість - сума знижки

console.log(`Чистий прибуток склав - ${profit};`);


//============ ADVANCED ===========================================================================
        
document.writeln(`
    Максимальна ціна: ${maxPrice};<br>
    Мінімальна ціна: ${minPrice};<br>
    Вартість усіх товарів: ${allProducts};<br>
    Вартість усіх цілих частин вартостей товару (за мінусом копійок):${allProductsInt};<br>
    Сума товарів округлена до сотень: ${allProductsTo100};<br>
    Сума усіх товарів (округлена у менш.стор.) є парною: ${ifPriceOFAllProductsIsPair()};<br>
    Решта від купівлі усіх товарів у випадку оплати 500 грн. куп'юрою: ${restFromAllProducts};<br>
    Середнє значення цін товарів: ${averageCostOfProducts};<br>
    <br>
    Ціна з випадковою знижкою: ${allProductsWithDiscout};<br>
    Чистий прибуток: ${profit};<br>`);