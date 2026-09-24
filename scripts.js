const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
const drawsScore = document.querySelector('#draws-score')


let humanScoreNumber = 0
let machineScoreNumber = 0
let drawsScoreNumber = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    spinBoost()

    return choices[randomNumber]
    
}

function playTheGame(human, machine) {
    console.log('Humano: ' + human + ' Máquina: ' + machine)
    borderResult()
    if (human === machine) {
        result.innerHTML = "Deu Empate!"
        drawsScoreNumber++
        drawsScore.innerHTML = drawsScoreNumber

    } else if ((human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')) {

        result.innerHTML = "Você Ganhou!"
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
    } else {
        result.innerHTML = "Perdeu pra Máquina!"
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
    }
}



const bgRotateInner = document.querySelector(".bg-rotate");
let boostRotation = 0;

function spinBoost(extraDegrees = 720) {
    boostRotation += extraDegrees;
    bgRotateInner.style.transform = `rotate(${boostRotation}deg)`;
}

const borderResult = () => {
    result.style.backgroundColor = "#0000007b";
    return
};