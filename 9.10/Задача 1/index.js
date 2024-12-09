// Объект car
let car = {
    name: "",
    wheels: 4,
    doors: 4,
    isStarted: false,
    hp: 180,
    getCar(fullCommands) {
        let newName = getName(fullCommands)
        this.name = newName
    }
}
// Функция разбиения символов
function getName(word) {
    let isStartName = false;
    let result = []
    word.split("").forEach(element => {
        if (element == ')') {
            isStartName = false;
        }
        if (isStartName == true && element != ')') {
            result.push(element);
        }
        if (element == '(') {
            isStartName = true;
        }
    });
    return result.join("");
}
let inputText = prompt("Введите название функции getCar с именем машины.")

// Создаём машину
let newCar = {
    ...car
}
// Получаем название
newCar.getCar(inputText)

// Вывод
console.log(`Ввод: ${inputText}`)
console.log(`Вывод: `, newCar)