
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question6.value;
	var question6 = document.quiz.question5.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var question11 = document.quiz.question11.value;
	var question12 = document.quiz.question12.value;
	
	var correct = 0;
	
// ! Question 1 
if (question1 == "Honestly" || question1 == "honestly" ) {
	document.getElementById("textbox").style.color = "green";	
	correct++;		
} else {
	document.getElementById("textbox").style.color = "red";
}

// ! Question 2 
if (question2 == "Code" || question2 == "code") {
	document.getElementById("textbox").style.color = "green";	
	correct++;		
} else {
	document.getElementById("textbox").style.color = "red";
	correct++;
}	

// ! Question 3 
if (question3 == "Integrity" || question3 == "integrity") {
	document.getElementById("textbox").style.color = "green";	
	correct++;		
}   else {
	document.getElementById("textbox").style.color = "red";
	correct++;
}

// ! Question 4 	
if (question4 == "Everyone" || question4 == "everyone") {
	document.getElementById("textbox").style.color = "green";	
	correct++;		
}	else {
	document.getElementById("textbox").style.color = "red";
	correct++;
}

// ! Question 5 
if (question5 == "Retaliation" || question5 == "retaliation") {
	document.getElementById("textbox").style.color = "green";	
	correct++;		
} 	else {
	document.getElementById("textbox").style.color = "red";
	correct++;
}

// ! Question 6 
if (question6 == "Ethics" || question6 == "ethics") {
	document.getElementById("textbox").style.color = "green";	
	correct++;		
	} else {
	document.getElementById("textbox").style.color = "red";
	correct++;
}	

// ! Question 7 
if (question7 == "Tolerate" || question7 == "tolerate") {
	document.getElementById("textbox").style.color = "green";	
	correct++;		
} else {
	document.getElementById("textbox").style.color = "red";
	correct++;
}
	
// ! Question 8 
if (question8 == "Safety" || question8 == "safety") {
	document.getElementById("textbox").style.color = "green";	
	correct++;		
} else {
	document.getElementById("textbox").style.color = "red";
	correct++;
}

// ! Question 9 
if (question9 === "Raise It" || question9 === "RaiseIt" || question9 === "raise it") {
	document.getElementById("textbox").style.color = "green";	
	correct++;		
} else {
	document.getElementById("textbox").style.color = "red";
	correct++;
}

// ! Question 10 
if (question10 == "Environmental" || question10 == "environmental") {
	document.getElementById("textbox").style.color = "green";	
	correct++;		
} else {
	document.getElementById("textbox").style.color = "red";
	correct++;
}

// ! Question 11 
if (question11 == "Regulations" || question11 == "regulations") {
	document.getElementById("textbox").style.color = "green";	
	correct++;		
} else {
	document.getElementById("textbox").style.color = "red";
	correct++;
}
	
// ! Question 12 
if (question12 == "Best" || question12 == "best") {
	document.getElementById("textbox").style.color = "green";	
	correct++;		
} else {
	document.getElementById("textbox").style.color = "red";
	correct++;
}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}

