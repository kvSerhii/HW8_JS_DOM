'use strict'

// 1) Вывод содержимого инпута через алерт или лог.
const inp = document.getElementById('inpt');
const btn1 = document.getElementById('btn');

btn1.addEventListener('click', btnHandler);

function btnHandler(event) {
    alert(inp.value);
}