let turn = 'X';
let boxes = document.querySelectorAll('.game-box');
let boxTexts = document.querySelectorAll('.box-text');
let turnAndResult = document.querySelector('.turn-and-result');
let reset = document.querySelector('.reset');
let playAgain = document.querySelector('.play-again');
let gameOver = false;


//Game logic

function changeTurn() {
    if(turn === 'X') {
        turn = 'O';
    }
    else {
        turn = 'X';
    }
}



function checkForWin() {
    let wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

    wins.forEach(e => {
        if((boxTexts[e[0]].textContent == boxTexts[e[1]].textContent) && (boxTexts[e[1]].textContent == boxTexts[e[2]].textContent) && boxTexts[e[1]].textContent != ' ') {
            turnAndResult.querySelector('p').textContent =turn + " WON !!";
            gameOver = true;
            document.querySelector('.game-board').style.display = 'none';
            document.querySelector('.end-show').style.display = 'block';
        }
    })
}

Array.from(boxes).forEach(element => {
    element.addEventListener('click', () => {
        let boxText = element.querySelector('.box-text');
        if(boxText.textContent === ' ') {
            boxText.textContent = turn;
            checkForWin()
            if(!gameOver){
                changeTurn();
                turnAndResult.querySelector('p').textContent = turn + " 's turn";
            } 
        }
    })
})

let resetter = ()=> {
    Array.from(boxes).forEach(element => {
        let boxText = element.querySelector('.box-text');
        boxText.textContent = ' ';
    })
    turn = 'X';
    turnAndResult.querySelector('p').textContent = turn + " 's turn";
    gameOver = false;
    document.querySelector('.game-board').style.display = 'grid';
    document.querySelector('.end-show').style.display = 'none';
}

reset.addEventListener('click', resetter);
playAgain.addEventListener('click', resetter);