totalSum = (priceItem, amountItem, discountItem) => {
    calcPersent = (priceItem * amountItem) / (100 / discountItem);
    return (priceItem * amountItem) - calcPersent;
}
let nameItem = "Ноутбук";
let priceItem = 25000;
let amountItem = 3;
let discountItem = 20;

let result = totalSum(priceItem, amountItem, discountItem)
console.log(`Товар = ${nameItem}`)
console.log(`Цена = ${priceItem}`)
console.log(`Кол-во = ${amountItem}`)
console.log(`Скидка в % = ${discountItem}`)
console.log(`totalSum = ${result}`)