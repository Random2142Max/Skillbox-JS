// Берём DOM элементы
let firstBtn = document.querySelector('.firstBtn');
let secondBtn = document.querySelector('.secondBtn');
let thirdBtn = document.querySelector('.thirdBtn');
let fullImg = document.querySelector('.fullImg');

// Создаём Event клика с действием, на замену изображения по ссылке
firstBtn.addEventListener("click", function() {
    fullImg.src = "Image/1.png";
});
secondBtn.addEventListener("click", function() {
    fullImg.src = "Image/2.png";
});
thirdBtn.addEventListener("click", function() {
    fullImg.src = "Image/3.jpg";
});