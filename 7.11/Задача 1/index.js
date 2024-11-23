// Сохраняем нужные нам классы в переменные
let getAllBooks = document.querySelector('.allBooks');
let getAddButton = document.querySelector('.addBookButton');
let getSearchButton = document.querySelector('.searchButton');

// Создаём список эл-ов
let books = ["Мастер и Маргарита",
    "Гарри Поттер",
    "За пропастью во ржи",
    "Властелин колец",
    "Дюна",
    "Отцы и дети"];

renderNewList(books);

// Функция добавления книги
getAddButton.onclick = function () {
    let newBook = prompt("Введите название новой книги");

    if (newBook == null) {
        alert("Название книги не введено!");
    } else {
        books.push(newBook);
        renderNewList(books);
    }
};

getSearchButton.onclick = function () {
    let searchBook = prompt("Введите название книги, которую ищете");
    
    // Поиск по ключу (индекс)
    let key = books.findIndex(element => element?.includes(searchBook));
    if (key != -1) {
        // Получаем элемент по ключу и окрашиваем в красный цвет
        var elem =
         document.querySelector(`li:nth-child(${key + 1})`)
         .style.color = "green";
    } else {
        alert("Книга не найдена!");
    }
};

function renderNewList(arr) {
    getAllBooks.innerHTML = "";
    for (let i = 0; i < books.length; i++) {
        let liEl = document.createElement("li");
        liEl.textContent = `${i + 1}) ${books[i]}`;
        getAllBooks.append(liEl);
    }
};