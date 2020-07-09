// This will be the ones from the first page
let startButton = document.getElementById('main');
let questionContainer = document.getElementById('question-container');
let shuffleQ, currentQ;
let questionElement = document.getElementById('the-question');
let answerButtonElement = document.getElementById('ans-buttons');
let answer = document.getElementById('c1');
let answerTwo = document.getElementById('c2');
let answerThree = document.getElementById('c3');
let final = document.getElementById('answer001');
let next = document.getElementById('next');
let nex = document.getElementById('nex');

let scoreTracker = document.getElementById('score0');

var button = document.getElementsByClassName('btn');
var s = 0;
s++;

// this will be the one for the highscores page
// var scoreList = document.getElementById("score-list");
// var list = [];

// function showScores(){
// 	scoreList.innerHTML = "";

// 	for (var i = 0; i < list.length; i++ ){
// 		var results = list[i];
// 	}
// }

//  This is for the timer
var timeEl = document.querySelector('.time');
var secondsLeft = 20;

// this will make the start quiz button call the start quix function whihc will strat the timer and dispaly the questions and answer choices
startButton.addEventListener('click', startQuiz);

// this is the startQuiz function and when it is clicked it will start everything inside it
function startQuiz() {
	startButton.classList.add('hide');
	// shuffleQ = question.sort(() => Math.random() - 0.5);
	currentQ = 0;
	questionContainer.classList.remove('hide');
	setTime();
	nextQuestion();
}

// this will be the time that startes once the user clicks on the Start Quiz button
function setTime() {
	var timerInterval = setInterval(function() {
		secondsLeft--;
		timeEl.textContent = ' Time: ' + secondsLeft;

		if (secondsLeft === 0) {
			clearInterval(timerInterval);
		}
	}, 1000);
}

function nextQuestion() {
	// showQ(shuffleQ[currentQ]);
	questionElement.innerHTML = question[0];
	answer.innerHTML = a1[0];
	button.addEventListener('click', correctF);
}

function showQ(question) {
	questionElement.innerText = question.question;
}

function correctF() {
	final.innerHTML = c[0];
	answerButtonElement.classList.add('hide');
	next.classList.remove('hide');
	nex.addEventListener('click', partTwo);
}

function partTwo() {
	next.classList.add('hide');
	answerButtonElement.classList.remove('hide');
	questionElement.innerHTML = question[1];
	answer.innerHTML = a1[1];
	button.addEventListener('click');
}

function chooseAnswer() {}

// let question = [
// 	{
// 		question: 'What is 2+2',
// 		answer: '4',
// 		choices: [ '3', '4', '6', '13' ]
// 	},

// 	{
// 		question: 'What is 5+5',
// 		answer: '10',
// 		choices: [ '9', '12', '8', '10' ]
// 	},
// 	{
// 		question: 'What color is blue',
// 		answer: 'blue',
// 		choices: [ 'blue', 'red', 'green', 'purple' ]
// 	}
// ];

var question = [ 'What is 1+1 <br /><br />', 'What is blue <br /><br />', 'What is soccer<br /><br />' ];
var a1 = [ '2', 'red', 'real' ];
var a2 = [ '5', 'blue', 'barca' ];
var a3 = [ '10', 'green', 'pairs' ];

var c = [ 'Correct', 'Correct', 'Correct', 'Correct' ];
