// Переменные
let users = [
    ["Alice", 25, true],
    ["Bob", 30, false],
    ["Charlie", 22, true],
    ["David", 27, true],
    ["Eve", 20, false]    
];

// Функция сортировки
function filterAndSortUsers(users) {
    // Сортировка
    users = users.filter(element => element[1] > 25 && element[2] == true);
    // Сохранение
    arr = [];
    users.forEach(element => arr.push(element[0]));
    return arr;
};

// Переменная с вызывающая функцию сортировки
let sportUsersOver25 = filterAndSortUsers(users);

console.log(sportUsersOver25);