// Объявление переменных
const leftPanel = document.querySelector(".leftPanel");
const content = document.querySelector(".mainBlock");
const button = document.querySelector(".menu");

function ClosePanel() {
    leftPanel.classList.toggle('open'); // Переключаем класс 'open'
    content.classList.toggle('shift');
}

// Добавляем обработчик события на кнопку
button.addEventListener('click', ClosePanel);