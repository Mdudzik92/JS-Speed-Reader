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

// Setting what i is to be read as in the second function. Effectively turning the poem into an array.
var i = 0;

// Allows the user to choose how many milliseconds between each word they should get printed to the screen, thus letting them work at their preferred pace for speed reading.
var millisecondsPerWord = prompt(
	"How many milliseconds between words would you like? 1000 milliseconds = 1 second.",
);

// Creating the prepareRead function to set our countdown timer process in.
function prepareRead() {
	// Starting off the timer with a 5 second countdown.
	var secondsLeft = 5;
	var timerInterval = setInterval(function () {
		timerEl.textContent = secondsLeft + " seconds remaining";
		secondsLeft--;

		// Setting the if statement so when the timer runs out it clears the timer and begins the speedRead function.
		if (secondsLeft === 0) {
			timerEl.textContent = "";
			// Begins second function, clearing timer from the screen.
			speedRead();
			clearInterval(timerInterval);
		}
	}, 1000);
}

// Creating the speedRead function to start the speed reading process.
function speedRead() {
	// First I'm appending a div to the h3 in the HTML.
	mainEl.append(bodyEl);

	// Setting the function to print the words to the screen one at a time.
	var poemInterval = setInterval(function () {
		if (words[i] === undefined) {
			clearInterval(poemInterval);
		} else {
			// Start the words one at a time. The 'words' variable uses the split method which reads the poem as an array. Here I have it reading each word and going through the array one by one, word for word.
			mainEl.textContent = words[i];
			i++;
		}
	}, millisecondsPerWord);
}

// Starting the process.
prepareRead();
