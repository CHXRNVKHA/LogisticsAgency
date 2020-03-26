const tableBody = document.querySelector('#mainTable tbody');
const form = document.querySelector("form");

const defUpdateBtnText = 'Update';
const defDelBtnText = 'Delete';
let usersTempStorage;

const createButton = function (inText, className) {
    const btn = document.createElement('button');
    btn.innerText = inText;
    btn.className = className;
    return btn;
}
const addTableRow = function (id, weight, tBody) {
    const row = document.createElement('tr');
    const idCol = document.createElement('th');
    const weightCol = document.createElement('th');
    const updateCol = document.createElement('th');
    const deleteCol = document.createElement('th');
    const updateBtn = createButton(defUpdateBtnText, 'updateBtn');
    const deleteBtn = createButton(defDelBtnText, 'deleteBtn');
    updateCol.appendChild(updateBtn);
    deleteCol.appendChild(deleteBtn);
    idCol.innerText = id;
    weightCol.innerText = weight;
    row.appendChild(idCol);
    row.appendChild(weightCol);
    row.appendChild(updateCol);
    row.appendChild(deleteCol);
    tBody.appendChild(row);
}

const resetTable = async function (event) {
    if (event.target.id === 'reset') {
        tableBody.innerHTML = '';
        usersTempStorage.forEach(element => {
            if (element.deleteAt === null) {
                addTableRow(element.id, element.name, element.age, tableBody);
            }
        });
    }
}
const getAllCargos = async function () {
    const response = await fetch('/cargo', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        }
    });
    const cargos = await response.json();
    cargos.forEach(element => {
        addTableRow(element.idCargo, element.weight, tableBody);
    });
}
const createCargo = async function (event) {
    event.preventDefault();
    if (event.target.id === 'add') {
        const cargoWeight = this.elements['weight'].value;
        const response = await fetch('/cargo/add', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                weight: cargoWeight,
            })
        });
        const cargo = await response.json();
        addTableRow(cargo.idCargo, cargo.weight, tableBody);
    }
}

const updateCargo = async function (event) {
    event.preventDefault();
    if (event.target.className == 'updateBtn') {
        const targetRow = event.target.parentElement.parentElement;
        const cargoWeight = form.elements['weight'].value;
        const cargoId = targetRow.cells[0].innerText;
        targetRow.cells[1].innerText = cargoWeight;
        const response = await fetch('/cargo/edit', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                idCargo: cargoId,
                weight: cargoWeight,
            })
        });
    }
}

const deleteUser = async function (event) {
    event.preventDefault();
    if (event.target.className == 'deleteBtn') {
        const targetRow = event.target.parentElement.parentElement;
        const userId = targetRow.cells[0].innerText;
        targetRow.remove();
        const response = await fetch('/users', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                id: userId,
            })
        });
    }
}

const saveAllChanges = async function (event) {
    event.preventDefault();
    if (event.target.id === 'submit') {
        const response = await fetch('/users/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
        });
        usersTempStorage = await response.json();
        alert('Data has been saved');
    }
}

document.addEventListener('DOMContentLoaded', getAllCargos);
form.addEventListener('click', saveAllChanges);
form.addEventListener('click', createCargo);
form.addEventListener('click', resetTable);
tableBody.addEventListener('click', updateUser);
tableBody.addEventListener('click', deleteUser);