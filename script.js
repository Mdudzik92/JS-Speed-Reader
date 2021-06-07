// Poem to use for speed reading
var poem =
	"Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";

// Splitting the words individually from the poem and setting them in a variable.
var words = poem.split(" ");

// Grabbing the HTML tags and setting them in their own variables.
var mainEl = document.getElementById("main");
var timerEl = document.getElementById("countdown");
// Creating a div to set the poem into later.
var bodyEl = document.createElement("div");

// Creating the prepareRead function to set our countdown timer process in.
function prepareRead() {
	// Starting off the timer with a 5 second countdown.
	var secondsLeft = 5;
	var timerInterval = setInterval(function () {
		timerEl.textContent = secondsLeft + " seconds remaining";
		secondsLeft--;
	});
}
