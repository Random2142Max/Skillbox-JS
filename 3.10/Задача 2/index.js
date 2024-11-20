// Итоговая сумма налога
let transportTex = 0;
// Мощность автомобиля
let carPower = prompt("Введите мощность автомобиля");
console.log(`Ввод: ${carPower}`)
// Ставка налога на 1 л.с. - деньги
let theTaxRatePerIne = 0;

// Надо переделать
if (carPower < 100) {
    theTaxRatePerIne = 12;
} else if (carPower >= 100 && carPower < 125) {
    theTaxRatePerIne = 25;
} else if (carPower >= 125 && carPower < 150) {
    theTaxRatePerIne = 35;
} else if (carPower >= 150 && carPower < 175) {
    theTaxRatePerIne = 45;
} else if (carPower >= 175 && carPower < 200) {
    theTaxRatePerIne = 50;
} else if (carPower >= 200 && carPower < 225) {
    theTaxRatePerIne = 65;
} else if (carPower >= 225 && carPower < 250) {
    theTaxRatePerIne = 75;
} else {
    theTaxRatePerIne = 150;
}

transportTex = carPower * theTaxRatePerIne;

console.log(`Вывод: Сумма налога: ${transportTex}`)