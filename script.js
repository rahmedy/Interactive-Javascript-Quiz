// This will be the ones from the first page
var questionIndex = 0;
var currentTime = document.querySelector('#theTime');
var timer = document.querySelector('#start-btn');
var questionsDiv = document.querySelector('.description');
var wrapper = document.querySelector('#main');

var secondsLeft = 80;
var holdInterval = 0;
var loss = 10;
var score = 0;

var ulCreate = document.createElement('ul');

timer.addEventListener('click', function() {
	// checking for 0, will alert times up!
	if (holdInterval === 0) {
		holdInterval = setInterval(function() {
			secondsLeft--;
			currentTime.textContent = 'Time: ' + secondsLeft;

			if (secondsLeft <= 0) {
				clearInterval(holdInterval);
				allDone();
				currentTime.textContent = "Time's up!";
			}
		}, 1000);
	}
	render(questionIndex);
});

// this will be the time that startes once the user clicks on the Start Quiz button
function render(questionIndex) {
	// Clears existing data
	questionsDiv.innerHTML = '';
	ulCreate.innerHTML = '';

	for (var i = 0; i < questions.length; i++) {
		// appends a title
		var userQuestion = questions[questionIndex].title;
		var userChoices = questions[questionIndex].choices;
		questionsDiv.textContent = userQuestion;
	}

	userChoices.forEach(function(newItem) {
		var listItem = document.createElement('li');
		listItem.textContent = newItem;
		questionsDiv.appendChild(ulCreate);
		ulCreate.appendChild(listItem);
		listItem.addEventListener('click', compare);
	});
}

function compare(event) {
	var element = event.target;

	if (element.matches('li')) {
		var createDiv = document.createElement('div');
		createDiv.setAttribute('id', 'createDiv');
		// Correct condition
		if (element.textContent == questions[questionIndex].answer) {
			score++;
			createDiv.textContent = 'Correct! The answer is:  ' + questions[questionIndex].answer;
			// Correct condition
		} else {
			// -5 off the loss
			secondsLeft = secondsLeft - 15;
			createDiv.textContent = 'Wrong! The correct answer is:  ' + questions[questionIndex].answer;
		}
	}

	questionIndex++;

	if (questionIndex >= questions.length) {
		done();
		createDiv.textContent =  'You got  ' + score + '/' + questions.length + ' Correct!';
	} else {
		render(questionIndex);
	}
	questionsDiv.appendChild(createDiv);
}
function done() {
	questionsDiv.innerHTML = '';
	currentTime.innerHTML = '';

	var createH1 = document.createElement('h1');
	createH1.setAttribute('id', 'createH1');
	createH1.textContent = 'Time is up!';

	questionsDiv.appendChild(createH1);
	// paragraph

	var createP = document.createElement('p');
	createP.setAttribute('id', 'createP');

	questionsDiv.appendChild(createP);

	// this is the time remaining and its replaced with a score
	if (secondsLeft >= 0) {
		var timeRemaining = secondsLeft;
		var createP2 = document.createElement('p');
		clearInterval(holdInterval);
		createP.textContent = 'Your final score is: ' + timeRemaining;

		questionsDiv.appendChild(createP2);
	}

	//  created a label
	var createLabel = document.createElement('label');
	createLabel.setAttribute('id', 'createLabel');
	createLabel.textContent = 'Enter your initials: ';

	questionsDiv.appendChild(createLabel);

	var createInput = document.createElement('input');
	createInput.setAttribute('type', 'text');
	createInput.setAttribute('id', 'initials');
	createInput.textContent = '';

	questionsDiv.appendChild(createInput);

	// submit button for high scores!
	var createSubmit = document.createElement('button');
	createSubmit.setAttribute('type', 'submit');
	createSubmit.setAttribute('id', 'Submit');
	createSubmit.textContent = 'Submit';

	questionsDiv.appendChild(createSubmit);

	createSubmit.addEventListener('click', function() {
		var initials = createInput.value;

		if (initials === null) {
			console.log('No value entered!');
		} else {
			var finalScore = {
				initials: initials,
				score: timeRemaining
			};
			console.log(finalScore);
			var allScores = localStorage.getItem('allScores');
			if (allScores === null) {
				allScores = [];
			} else {
				allScores = JSON.parse(allScores);
			}
			allScores.push(finalScore);
			var newScore = JSON.stringify(allScores);
			localStorage.setItem('allScores', newScore);
			// this leads a user to a new highscore page
			window.location.replace('./scores.html');
		}
	});
}

let questions = [
	{
		title: '1. How many Superbowls has Peyton Manning won?',
		choices: [ '2', '5', '1', '3' ],
		answer: '2'
	},
	{
		title: '2. What NBA team came back from being down 3-1 in the finals?',
		choices: [ 'Cavaliars', 'Warriors', 'Bulls', 'Knicks' ],
		answer: 'Cavaliars'
	},
	{
		title: '3. What sport franchise is worth the most',
		choices: [ 'FC Barcelona', 'Dallas Cowboys', 'Real Madrid', 'LA Dogers?' ],
		answer: 'Dallas Cowboys'
	},
	{
		title: '4. What team lost the Superbowl after being up 28-3 at halftime?',
		choices: [ 'Colts', 'Patriots', 'Seahawks', 'Falcons' ],
		answer: 'Falcons'
	},
	{
		title: '5. Who has the most NFL MVPs?',
		choices: [ 'Jim Brown', 'Tom brady', 'Dan Marino', 'Peyton Manning' ],
		answer: 'Peyton Manning'
	}
];


// goBack.addEventListener('click', function() {
// 	window.location.replace('./index.html');
// });
