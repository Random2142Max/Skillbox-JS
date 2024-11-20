const celsiusToFahrenheit = (C) => C * 1.8 + 32;
const fahrenheitToCelsius = (F) => (F - 32) / 1.8;

let f1 = celsiusToFahrenheit(25);
console.log(`celsiusToFahrenheit(25) = ${f1}`)
let c1 = fahrenheitToCelsius(25);
console.log(`fahrenheitToCelsius(25) = ${c1}`)

f1 = celsiusToFahrenheit(77);
console.log(`celsiusToFahrenheit(77) = ${f1}`)
c1 = fahrenheitToCelsius(77);
console.log(`fahrenheitToCelsius(77) = ${c1}`)