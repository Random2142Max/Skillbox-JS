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

// Текущее кол-во имён машин
let names = ["bmw","audi","mercedes"]

// Основной список с шаблоном
let cars = {
    allCars: {},
    outAllNames() {
        Object.keys(this.allCars).forEach(element => {
            console.log(element);
        });
    }
}
names.forEach(element => {
    cars.allCars[element] = car;
});

// Вывод
cars.outAllNames();