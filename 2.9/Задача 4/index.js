// Сделайте код программы короче, используя инкремент.

let index = 0; // Счетчик
let currentYear = 2024; // Текущий год
let sumAge = 0; // Сумма все age
let str = "";

// Бугун 1
let runner1 = prompt("Введите имя 1-ого пользователя");
let birth_year1 = prompt("Введите год рождения");
let age1 = currentYear - birth_year1;
sumAge += age1;
str = `${index}, '${runner1}' ${age1}`;
index++;
console.log(str);

// Бугун 2
let runner2 = prompt("Введите имя 2-ого пользователя");
let birth_year2 = prompt("Введите год рождения");
let age2 = currentYear - birth_year2;
sumAge += age2;
str = `${index}, '${runner2}' ${age2}`;
index++;
console.log(str);

// Бугун 3
let runner3 = prompt("Введите имя 3-ого пользователя");
let birth_year3 = prompt("Введите год рождения");
let age3 = currentYear - birth_year3;
sumAge += age3;
str = `${index}, '${runner3}' ${age3}`;
index++;
console.log(str);

sumAge = sumAge / index;
str = `Средний возраст пользователей: ${sumAge}`;
console.log(str);