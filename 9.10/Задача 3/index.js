// Объект car
let car = {
    name: "",
    wheels: 4,
    doors: 4,
    isStarted: false,
    hp: 0
}
function createCar(name, hp) {
    let newCar = Object.assign(car,{name, hp})
    return newCar
}

//Ввод
let inputArr = prompt("Введите название марки машины и её hp, через запятую.").split(',');
let newCar = createCar(inputArr[0], inputArr[1]);

// Вывод
console.log(newCar);