//create a start button
//create objects with questions and answers
//create a function that displays questions and starts timer 
$(document).ready(function() {
	var index = 0;
	var count = 0;
	var intervalID;
	var time = 30;
	var correctAnswers = 0;
	var wrongAnswers = 0;
	var allQuestions = [
	{
		question: "A?",
		choices: ["A.",
				"B.", 
				"C.", 
				"D."],
		answer: "A."
	},
	{
		question: "B?",
		choices: ["A.",
				"B.", 
				"C.", 
				"D."],
		answer: "B."
	},
	{
		question: "C?",
		choices: ["A.",
				"B.", 
				"C.", 
				"D."],
		answer: "C."
	},
	];
	$("#start").html("<button id=startButton><h4>Start</h4></button></div>");

	//counts down timer and displays the number
	function timer () {
			time--;
			$("#timer").html("Time left to answer: " + time + " seconds.");
			if (time <=0) {
				wrongAnswers++;
				count++;
				nextQuestion();
			}
	}
	

	// starts timer at 30 seconds and creats the interval 1 second
	function startTimer () {
		time=30;
		intervalID = setInterval(timer, 1000);

	}

	function stopTimer() {
		clearInterval(intervalID);
	}

	function displayResults () {
		$("#questions").empty();
		$(".answers").empty();
		$("#timer").empty();
		stopTimer();
		$(".answers").append("Correct Answers: " + correctAnswers + "<br>");
		$(".answers").append("Wrong Answers: " + wrongAnswers + "<br>");


	}

	//displays the next question
	function nextQuestion (){
		if (count < allQuestions.length) {
		stopTimer();
		startTimer();
			$(".answers").empty();
			$("#questions").html(allQuestions[count].question);
				for (i = 0; i < allQuestions[count].choices.length; i++ ) {
					var htmlText = "<button class=possibleAnswers id=button" + i + ">" + allQuestions[count].choices[i] + "</button><br>"
					$(".answers").append(htmlText);
				}	
						//checks to see if answer is correct
						$(".possibleAnswers").on('click', function(){
							var userAnswer = $(this).html();
							if (userAnswer===allQuestions[count].answer) {
							correctAnswers++;
							count++;
							stopTimer();
							startTimer();
							nextQuestion();
							}
							else {
							wrongAnswers++;	
							count++;
							stopTimer();
							startTimer();
							nextQuestion();
							}
							console.log(correctAnswers);
							console.log(wrongAnswers);
						});		
		}
		else {
			displayResults();


		}						
	}
	

	$("#startButton").on('click', function(){
		$(this).hide();
		nextQuestion();
	})



})