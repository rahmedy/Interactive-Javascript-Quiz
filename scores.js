var hScore = document.querySelector('#theScores');
var clear = document.querySelector('.cBtn');
var back = document.querySelector('.bBtn');

// Event listener to clear scores
clear.addEventListener('click', function() {
	localStorage.clear();
	location.reload();
});
// gets local storage
var allScores = localStorage.getItem('allScores');
allScores = JSON.parse(allScores);

if (allScores !== null) {
	for (var i = 0; i < allScores.length; i++) {
		var createLi = document.createElement('li');
		createLi.textContent = allScores[i].initials + ' ' + allScores[i].score;
		hScore.appendChild(createLi);
	}
}