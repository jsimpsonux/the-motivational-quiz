const startButton = document.getElementById('start');
const eachQuestion = document.getElementById('question-title');
const answerChoices = document.getElementById('choices');
const timerElement = document.getElementById('time');
const hideRemove = document.getElementById('questions');
const startScreen = document.getElementById('start-screen')


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
    }, 75 * 1000);
}

var currentQuestion = 0;

function displayQuestions(){
    const question = quizQuestions[currentQuestion];
    eachQuestion.textContent = question.question;

    answerChoices.innerHTML = '';
    question.answers.forEach((answers, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = answers;
        optionButton.classList.add('option');
        optionButton.addEventListener('click', () => checkAnswer(index));
        answerChoices.appendChild(optionButton);
    });
}

// console.log(quizQuestions.answers[0]);

var myScore = 0;

function checkAnswer(selectedAnswer) {
    const question = question[currentQuestion];
    if (selectedAnswer === quizQuestion.correctAnswer){
        myScore++;
    } else if (selectedAnswer !== question.correctAnswer) {
        timerCount - 10000;
    }

    currentQuestion++;
    if (currentQuestion < question.length) {
        displayQuestions();
    } else {
        showResults();
    }
}

function showResults(){
    eachQuestion.textContent
}

function start(){
    hasWon = false;
    startButton.disabled = true;
    Timer();
    displayQuestions();
    hideRemove.classList.remove('hide');
    startScreen.classList.remove('start');


}

startButton.addEventListener("click", start);