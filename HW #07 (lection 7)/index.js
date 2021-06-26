const ukraine = { 
    tax: 0.195, 
    middleSalary: 1789, 
    vacancies: 11476 
};
const latvia = { 
    tax: 0.25, 
    middleSalary: 1586, 
    vacancies: 3921 
};
const litva = { 
    tax: 0.15, 
    middleSalary: 1509, 
    vacancies: 1114 
};

// Задача №01 

function getMyTaxes(salary) {
    return this.tax * salary;
}

// Задача №02

function getMiddleTaxes() {
    return (this.middleSalary * this.tax).toFixed(2);
}

// Задача №03

function getTotalTaxes() {
    return (this.vacancies * this.middleSalary * this.tax).toFixed(2);
}

// Задача №04 

function getMySalary() {
    const randomSalary = Math.floor(Math.random() * 500 + 1500);
    const taxOfRandomSalary = Number((randomSalary * this.tax).toFixed(2));
    const profit = Number((randomSalary - taxOfRandomSalary).toFixed(2));

    const mySalary = {
        salary: randomSalary,
        taxes: taxOfRandomSalary,
        profit: profit,
    };

    return mySalary;
}


// ============================== РЕЗУЛЬТАТИ ==================================

console.log(`Задача №01 : ${getMyTaxes.call(ukraine, 10000)}`);
console.log(`Задача №02 : ${getMiddleTaxes.call(ukraine)}`);
console.log(`Задача №03 : ${getTotalTaxes.call(ukraine)}`);

console.log(`Задача №04 :`);
setInterval(() => console.log(getMySalary.call(ukraine)), 10000);
