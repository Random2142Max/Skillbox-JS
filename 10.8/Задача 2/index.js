// Берём DOM элементы
let addBtn = document.querySelector('.AddElBtn');
let delBtn = document.querySelector('.DelElBtn');
let ulList = document.querySelector('.List');

let liText = "Новый элемент списка";

// Создаём Event клика с действием, на замену изображения по ссылке
addBtn.addEventListener("click", function() {
    let liEl = document.createElement("li");
    liEl.textContent = liText;
    ulList.append(liEl);
});
delBtn.addEventListener("click", function() {
    ulList.lastChild.remove();
});