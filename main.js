
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;
	var correct = 0;


	if (question1 == "When a user logs into a website") {
		correct++;
}
    
	if (question2 == "They combine variables and functions together") {
		correct++;
}
    
    if (question3 == "yes or no values and true or false values") {
		correct++;
}
    
	if (question4 == "Many functions that make it easy to do powerful things with a few commands") {
		correct++;
}
    
    if (question5 == "It allows you to run programs with the security privileges of another user") {
		correct++;
}
        
    if (question6 == "Ruby on Rails") {
		correct++;
}
        
    if (question7 == "Strings, Math, Arrays, Hashes, Blocks, Methods, Iteration, If logic, and Classes") {
		correct++;
}
        
    if (question8 == ".html, .erb, .slim, and .jbuilder") {
		correct++;
}
        
    if (question9 == "In your index.html file") {
		correct++;
}
        
    if (question10 == "Adding colors, layouts and fonts") {
		correct++;
}
	
	var pictures = ["img/greatjob.gif", "img/eh.gif", "img/wrong.gif"];
	var messages = ["Good Work!", "So-So", "Better Luck Next Time"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
	
