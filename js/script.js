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
            createFieldsForRow(newRow, input);
        }
    });
}



addInputToTable();

const createTableRow = () => {
    let newTableRow = tableBody.insertRow(0);
    return newTableRow;
}

const createFieldsForRow = (tableRow, input) => {
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

    deleteIcon.addEventListener('click', () => {
        // suche nach dem übergeordneten tr-Element
        let row = deleteIcon.closest('tr');
        // überprüfe, ob row eine gültige Zeile ist
        if(row) {
            row.remove();
        }
    })
}

const createEditField = (tableRow) => {
    let editCell = tableRow.insertCell();
    let editIcon = document.createElement('img');
    editIcon.src = '../img/edit.png';
    editIcon.classList.add('edit');
    editCell.appendChild(editIcon);
}

const editTask = (tableRow) => {

}