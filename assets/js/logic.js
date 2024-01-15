const startButton = document.getElementById('start');
const eachQuestion = document.getElementById('question-title');
const answerChoices = document.getElementById('choices');
const timerElement = document.getElementById('time');
const hideRemove = document.getElementById('hide');


var hasWon = false;
var timer;
var timerCount;

function Timer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            if (hasWon && timerCount > 0) {
                clearInterval(timer);
                winGame();
            }
        }

        if (timer === 0) {
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
}

var currentQuestion = 0;

function displayQuestions(){
    const question = quizQuestions[currentQuestion];
    eachQuestion.textContent = quizQuestions.question;

    answerChoices.innerHTML = '';
    question.answers[0].forEach((answers, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = answers;
        optionButton.classList.add('option');
        optionButton.addEventListener('click', () => checkAnswer(index));
        answerChoices.appendChild(optionButton);
    });
}

// console.log(quizQuestions.answers[0]);


function start(){
    hasWon = false;
    startButton.disabled = true;
    Timer();
    displayQuestions();
    hideRemove.classList.remove;


}

startButton.addEventListener("click", start);