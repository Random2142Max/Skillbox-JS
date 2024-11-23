// Сохраняем нужные нам классы в переменные
let getAllItems = document.querySelector('.allItems');
let getAddItemButton = document.querySelector('.addItemButton');

// Создаём список эл-ов
let items = ["Арбуз", "Книга", "Кофе", "Макароны", "Молоко", "Сахар", "Яблоки"];

renderNewList(items);

// Функция добавления товара
getAddItemButton.onclick = function () {
    let newItem = prompt("Введите название товара");

    if (newItem == null) {
        alert("Название товара не введено!");
    } else {
        items.push(newItem);
        items = bubbleSort(items);
        renderNewList(items);
    }
};

function renderNewList(arr) {
    getAllItems.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        let liEl = document.createElement("li");
        liEl.textContent = `${i + 1}) ${arr[i]}`;
        getAllItems.append(liEl);
    }
};

function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let tempJ = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tempJ;
            }
        }
    }
    return arr;
};