'use strict'

// 1) Вывод содержимого инпута через алерт или лог.
const inp = document.getElementById('inpt');
const btn1 = document.getElementById('btn');

btn1.addEventListener('click', btnHandler);

function btnHandler(event) {
    alert(inp.value);
}

// 2) По нажатию на кнопку изменить текст самой  кнопки
const btn2 = document.getElementById('btn2');

btn2.addEventListener('click', changeButtonName);

function changeButtonName(event) {
    btn2.value = 'Already pressed!';
}