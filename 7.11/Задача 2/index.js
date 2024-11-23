// Сохраняем нужные нам классы в переменные
let getAllHeights = document.querySelector('.allHeights');
let getAddHeightButton = document.querySelector('.addHeightButton');
let getSortButton = document.querySelector('.sortButton');

// Создаём список эл-ов
let heights = [164, 157, 160, 143, 170];

renderNewList(heights);

// Функция добавления книги
getAddHeightButton.onclick = function () {
    let newHeight = prompt("Введите новый рост");

    if (newHeight == null) {
        alert("Рост не введён!");
    } else {
        heights.push(newHeight);
        renderNewList(heights);
    }
};

getSortButton.onclick = function () {
    let sortHeight = prompt("Введите число, по которому вы отфильтруете список");
    
    // Сортировка по возрастанию (Как я понял)
    heights = bubbleSort(heights);
    let newArr = [];

    // Новый список
    if (sortHeight != null) {
        for (value of heights) {
            if (value >= sortHeight) {
                newArr.push(value);
            }
        }
    }
    else {
        newArr = heights;
    }

    renderNewList(newArr)
};

function renderNewList(arr) {
    getAllHeights.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        let liEl = document.createElement("li");
        liEl.textContent = `${i + 1}) ${arr[i]}`;
        getAllHeights.append(liEl);
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