/*
Tasks speichern
Löschfunktion
Editierfunktion
*/

let taskTable = document.querySelector('.task-table');
let inputField = document.querySelector('.task-input');
let tableBody = document.querySelector('.task-table-body');

const addInputToTable = () => {
    inputField.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') {
            let input = inputField.value;
            inputField.value = '';
            let newRow = createTableRow();
            addCellsToTableRow(newRow, input);
        }
    });
}



addInputToTable();

const createTableRow = () => {
    let newTableRow = tableBody.insertRow(0);
    return newTableRow;
}

const addCellsToTableRow = (tableRow, input) => {
    createTaskField(tableRow, input);
    createEditField(tableRow);
    createDeleteField(tableRow);
}

const createTaskField = (tableRow, input) => {
    let taskCell = tableRow.insertCell();
    let newText = document.createTextNode(input);
    taskCell.appendChild(newText);
}

const createDeleteField = (tableRow) => {
    let deleteCell = tableRow.insertCell();
    let deleteIcon = document.createElement('img');
    deleteIcon.src = '../img/delete.png';
    deleteIcon.classList.add('delete');
    deleteCell.appendChild(deleteIcon);
}

const createEditField = (tableRow) => {
    let editCell = tableRow.insertCell();
    let editIcon = document.createElement('img');
    editIcon.src = '../img/edit.png';
    editIcon.classList.add('edit');
    editCell.appendChild(editIcon);
}