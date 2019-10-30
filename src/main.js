document.addEventListener('DOMContentLoaded', init());

import render from './render'

function init () {
    if (typeof (Storage) !== "undefined") {
        const items = localStorage.length;

        if (!items) {
            render.insertWarning();
        } else {
            const tasks = Object.keys(localStorage);

            for (const task of tasks) {
                render.insertTask(task, localStorage.getItem(task))
            }
        }

        document.querySelector('.btn-add-task').addEventListener('click', (e) => {
            e.preventDefault();

            if (!localStorage.length) {
                render.removeWarning();
            }

            const input = document.querySelector('.input-task');
            const value = input.value;
            
            input.value = '';

            const id = `item${parseInt(Math.random() * 1000)}${parseInt(Math.random() * 1000)}`;

            localStorage.setItem(id, value);

            location.reload();
        })

        const btnsRemove = document.querySelectorAll('.btn-remove');

        for (const btn of btnsRemove) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.removeItem(e.target.id);
                location.reload()
            })
        }
    } else {
        console.log('nao suporta local storage');
        // document.getElementById("result").innerHTML = "O Navegador não suporta armazenamentolocal ";
    }
}