// the group of const below select Id's in the HTML page and store in variable.
const startButton = document.getElementById('start');
const eachQuestion = document.getElementById('question-title');
const answerChoices = document.getElementById('choices');
const timerElement = document.getElementById('time');
const hideRemove = document.getElementById('questions');
const startScreen = document.getElementById('start-screen')

// variable for checking if user has won, begins as false. Timer variable to be used later in a function.
var hasWon = false;
var timer;
var timerCount;

// function timer is the countdown clock used in the quiz, and starts from a set time and counts downwards.

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

// Here is where the quizQuestions array in the questions page is stored, also the index to access the array.

var currentQuestion = 0;
var question = quizQuestions[currentQuestion];

// function displayQuestions is the function is that displays each question and its options, it also accesses where the questions will be 
// placed inside the HTML, console.log was added to test whether the browser is accessing inside the function.

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

// myScore stores the base value of the score which will increment the more correct answers the user gets. 

var myScore = 0;

// This function checks the correct answer that the users inputs, it takes the selectedAnswer and checks if it equals to the correct answer
// stored inside the array in the quizQuestions array, it's supposed to match the string, then it will increase the score and change to th next question.
// unless the user gets it wrong then it will remove time from the timer but still move to the nest question.

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

// Here is the start function that kicks of the quiz game, I had to hide classes so that the questions could display.
// when the event listener is activated at the bottom of this file, the display function and the timer should start automatically.

function start(){
    hasWon = false;
    startButton.disabled = true;
    Timer();
    displayQuestions();
    hideRemove.classList.remove('hide');
    startScreen.classList.remove('start');


}

startButton.addEventListener("click", start);