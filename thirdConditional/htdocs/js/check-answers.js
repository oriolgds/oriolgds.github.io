function allAudioPaused(){
	document.getElementById("audio-excellent").pause();		
	document.getElementById("audio-sorry").pause();
	document.getElementById("audio-takeALook").pause();
	let i = 1;
	while (i < 7){		
		document.getElementById(`audio-${i}`).pause();
		i++;
	}
}
function checkAnswers() {
	document.querySelector(".input-text-complete").style.border = '3px #002dd0 solid';
	document.querySelector(".display-6").style.color = '#212529';
	let correctAnswers = 0;
	let i = 1;
	while (i < 7){
		if (document.getElementById(`Radio-${i}-correct`).checked){
			correctAnswers++;
			document.getElementById(`h1-${i}`).style.color = '#008000';
		}
		else {
			document.getElementById(`h1-${i}`).style.color = 'red';
		}
		i++;
	}
	let o = 0;
	let answersComplete = {
		'complete-0':"hadn'tlost",
		'complete-1':"wouldhavearrived",
		'complete-2':"hadn'tbeen",
		'complete-3':"wouldhavegone",
		'complete-4':"wouldhaveseen",
		'complete-5':"hadcome"
	};
	let answersComplete2 = {
		'complete-0':"hadnotlost",
		'complete-1':"wouldhavearrived",
		'complete-2':"hadnotbeen",
		'complete-3':"wouldhavegone",
		'complete-4':"wouldhaveseen",
		'complete-5':"hadcome"
	};
	while (o < 6) {
		let answer = document.getElementById(`complete-${o}`).value;
		answer = answer.toLowerCase();
		answer = answer.replace(/ /g,'');
		if (answer == answersComplete[`complete-${o}`] || answer == answersComplete2[`complete-${o}`]){
			correctAnswers++;
			document.getElementById(`complete-${o}`).style.border = '3px #008000 solid';
		}
		else {
			document.getElementById(`complete-${o}`).style.border = '3px red solid';
		}
		o++;
	}


	// Calculate %
	correctAnswers = (correctAnswers*100)/12; // 12 is the number of exercices
	correctAnswers = Math.trunc(correctAnswers);
	if (correctAnswers >= 70){		
		allAudioPaused();
		document.getElementById("audio-excellent").play();
		document.getElementById("percent-result").innerHTML = `You have a <b style="color: 'green';">${correctAnswers}%</b> of correct answers. <b>Well done!</b>`;
	}
	else if (correctAnswers >= 50){
		allAudioPaused();
		document.getElementById("audio-takeALook").play();
		document.getElementById("percent-result").innerHTML = `You have a <b style="color: 'green';">${correctAnswers}%</b> of correct answers. <b>You have pass but I recommend you to take a look.</b>`;
	}
	else {
		allAudioPaused();
		document.getElementById("audio-sorry").play();
		document.getElementById("percent-result").innerHTML = `You have a <b style="color: 'red';">${correctAnswers}%</b> of correct answers. You <b>haven't pass</b> the test, watch the video and try again.`;
	}
	document.getElementById("percent-result").style.display = 'block';
	location.href = '#r';
}
function voiceReader(audioSelected) {
	let i = 1;
	while (i < 10){
		if (!(i == audioSelected)){			
			document.getElementById(`audio-${i}`).pause();
		}
		else {
			document.getElementById(`audio-${i}`).play();
		}
		i++;
	}
}