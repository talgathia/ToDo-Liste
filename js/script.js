let taskTable = document.querySelector('.task-table');
let inputField = document.querySelector('.task-input');

inputField.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        console.log('Hallo');
    }
});

