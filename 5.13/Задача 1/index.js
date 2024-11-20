let getButtonInfo = document.getElementById('product-list');

// Объект item нужен, чтобы при вызове указанной нами функции
// не было ошибки с инициализацией (Псевдо ничто)
let item = null;

getButtonInfo.onclick = addToCart(item);

function addToCart(item) {
    // Делаем проверку, чтобы не добавлять ничто
    if (item != null)
    {
        let getUl = document.getElementById('cart');
    
        let newLi = document.createElement('li');
        newLi.innerHTML = `<li><span>${item}</span></li>`;
    
        getUl.append(newLi);
    }
}