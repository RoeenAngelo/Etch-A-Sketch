let color = 'black';

document.addEventListener('DOMContentLoaded', () => {
    createBoard(32) //default size
    let btn_popup = document.querySelector('#popup');
    btn_popup.addEventListener('click', () => {
        let size = getSize();
        createBoard(size);
    })
})

function createBoard(size) {
    let board = document.querySelector('.board')
    
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let numDivs = size * size;

    for (i = 0; i < numDivs; i++) {
        let div = document.createElement('div');
        div.addEventListener('mouseover', colorDiv) // allows to hover
        board.insertAdjacentElement('beforeend', div);
    }
}

function getSize() {
    let input = prompt('Please enter a number between 1-100 for the size of the board');
    let message = document.querySelector('#message');
    if (input == ""){
        message.innerHTML = 'Please provide a number';
    }
    else if (input < 0 || input > 100 ) {
        message.innerHTML = 'Please provide a number between 1-100';
    }
    else {
        message.innerHTML = 'Start Drawing!'
        return input
    }
}

function colorDiv() {
    if (color == 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }
    else {
        this.style.backgroundColor = 'black';
    }
}

function setColor(colorChoice) {
    color = colorChoice
}

function resetBoard() {
    let divs = document.querySelectorAll('div');
    divs.forEach((div) => div.style.backgroundColor = 'white')
}