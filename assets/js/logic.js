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
var question = quizQuestions[currentQuestion];

function displayQuestions(){
    console.log(question);
    eachQuestion.textContent = quizQuestions[currentQuestion].question;

    answerChoices.innerHTML = '';
    quizQuestions[currentQuestion].answers.forEach((answers, index) => {
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
    console.log("inside checkAnswer function");
    if (question.answers[selectedAnswer] === question.correctAnswer){
        console.log("Inside the first if statement");
        myScore++;
        currentQuestion++;
        console.log("You are here");
        displayQuestions();
    } else if (question.answers[selectedAnswer] !== question.correctAnswer) {
        timerCount - 10000;
        currentQuestion++;
        displayQuestions();
    }

    // currentQuestion++;
    // if (currentQuestion < question.length) {
    //     displayQuestions();
    // } else {
    //     showResults();
    // }
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