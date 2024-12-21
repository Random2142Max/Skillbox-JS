// Берём DOM элементы
let upBtn = document.querySelector('.SortUp');
let lowBtn = document.querySelector('.SortLow');
let ulList = document.querySelector('.List');

let liText = [100,500,250,750,300];
let bl = false;
outList(liText);

// ulList.lastChild.remove();

// Создаём Event клика с действием, на замену изображения по ссылке
upBtn.addEventListener("click", function() {
    bl = false;
    bubbleSort(liText, bl);
    outList(liText);
});

lowBtn.addEventListener("click", function() {
    bl = true;
    bubbleSort(liText, bl);
    outList(liText);
});

// Вывод
function outList(liText) {
    ulList.innerHTML = ""
    liText.forEach(element => {
        let liEl = document.createElement("li");
        liEl.textContent = element;
        ulList.append(liEl);
    });
}

// Сортировка по возрастанию
function bubbleSort(arr, bl) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (bl == true) {
                if (arr[j] < arr[j + 1]) {
                    let tempJ = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tempJ;
                }
            }
            else {
                if (arr[j] > arr[j + 1]) {
                    let tempJ = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tempJ;
                }
            }
        }
    }
    return arr;
};