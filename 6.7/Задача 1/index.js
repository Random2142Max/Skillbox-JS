let getUlClass = document.querySelector('.products');

let products = ["Мышка","Клавиатура","Наушники","Монитор","Принтер","Флешка"];
for (value of products) {
    let newLi = document.createElement('li');
    newLi.innerHTML = `<span>${value}</span>`;
    getUlClass.append(newLi)
}