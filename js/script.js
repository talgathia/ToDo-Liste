let taskTable = document.querySelector('.task-table');
let inputField = document.querySelector('.task-input');
let tableBody = document.querySelector('.task-table-body');

const addInputToTable = () => {
    inputField.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') {
            let input = inputField.value;
            inputField.value = '';
            let newRow = createTableRow();
            addCellToTableRow(newRow, input);
        }
    });
}



addInputToTable();

const createTableRow = () => {
    let newTableRow = tableBody.insertRow(0);
    return newTableRow;
}

const addCellToTableRow = (tableRow, input) => {
    let taskCell = tableRow.insertCell();
    let editCell = tableRow.insertCell();
    let deleteCell = tableRow.insertCell();
    let newText = document.createTextNode(input);
    taskCell.appendChild(newText);
    
    let deleteIcon = document.createElement('img');
    deleteIcon.src = '../img/delete.png';
    deleteIcon.classList.add('delete');
    deleteCell.appendChild(deleteIcon);
    
    let editIcon = document.createElement('img');
    editIcon.src = '../img/edit.png';
    editIcon.classList.add('edit');
    editCell.appendChild(editIcon);
}