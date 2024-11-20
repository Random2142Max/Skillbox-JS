// Сохраняем нужные нам классы в переменные
let getClassP = document.querySelector('.all-elements');
let getButtonMin = document.querySelector('.min');
let getButtonMax = document.querySelector('.max');
let getClassMinNumber = document.querySelector('.minNumber');
let getClassMaxNumber = document.querySelector('.maxNumber');

// Создаём список эл-ов
let products = [-2,3,7,5,-9,0];
let allElements = ""

// Вывод всех чисел
for (let i = 0; i < products.length; i++) {
    // Использовал тернарник, для вывода
    allElements +=
     (i != products.length - 1) ? `${products[i]},` : `${products[i]}`;
    
};
let outAllElements = document.createElement("p");
outAllElements.innerHTML = `${allElements}`;
getClassP.append(outAllElements);

// Обработчики нажатия кнопок с лямбда функциями
getButtonMin.onclick = function () {
    let min = Number.MAX_VALUE;
    for (value of products) {
        if (min > value)
            min = value;
    }
    getClassMinNumber.innerHTML = `${min}`;
};
getButtonMax.onclick = function () {
    let max = Number.MIN_VALUE;
    for (value of products) {
        if (max < value)
            max = value;
    }
    getClassMaxNumber.innerHTML = `${max}`;
};