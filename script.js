const topoSwitchTime = 400;
const gameTime = 0;
let score= 0;
let timer = null;
timeUp = false;


const holes = [
    document.querySelector('.hole1'),
    document.querySelector('.hole2'),
    document.querySelector('.hole3'),
    document.querySelector('.hole4'),
    document.querySelector('.hole5'),
    document.querySelector('.hole6'),
];

for( const hole$$ of holes) {
    hole$$.addEventListener('click',bang);
}

function startGame(){
endGame();
score = 0;
scoreBoardUpdate(endGame);
timer = setInterval(changeTopo,topoSwitchTime);
setTimeout(endGame,25000);
  

}

function changeTopo() {
    for (const hole$$ of holes){
        hole$$.classList.remove('up');
}
const randomHole$$ = holes [getRandomHole()];
randomHole$$.classList.add('up');
}




function getRandomHole(){
    return Math.floor(Math.random() * 6);
}

function bang(){
    if(!timeUp && this.classList.contains('up')){
        this.classList.remove('up');
        addPoint();
    }
}

function addPoint() {
score ++
scoreBoardUpdate();
}


function scoreBoardUpdate(){
    const scoreBoard$$ = document.querySelector('.score');
    scoreBoard$$.textContent = score;
    if (score >= 16 ){
        alert('WOW YOU WIN');
    }
    
    }


function endGame() {
    clearInterval(timer);
}

