let scorecard = [];

let quiz = [
	{
		qtext: "Which of these mayoral candidates supported both the speculator tax and the Mission moratorium, the effort to stop market-rate housing from getting built in the Mission District?",
		options: [
			{
				otext: "London Breed",
				isCorrect: false
			},
			{
				otext: "Jane Kim",
				isCorrect: true
			},
			{
				otext: "Mark Leno",
				isCorrect: false
			}
		]
	},
	{
		qtext: "Which mayoral candidate has gone on record saying the devil is real and exorcism is legitimate?",
		options: [
			{
				otext: "Angela Alioto",
				isCorrect: true
			},
			{
				otext: "London Breed",
				isCorrect: false
			},
			{
				otext: "Jane Kim",
				isCorrect: false
			}
		]
	},
	{
		qtext: "Which of the following multi-year projects is up for a ballot measure in June?",
		options: [
			{
				otext: "BART extension",
				isCorrect: false
			},
			{
				otext: "High-speed rail between SF-LA",
				isCorrect: true
			},
			{
				otext: "Ladder to the moon",
				isCorrect: false
			}
		]
	}
];

// let main = $('main')[0].html;
let qindex;
let question;
let options;

const loadFeedback = (oindex) => {
	$('.question').remove();
	qindex++;
	if (qindex > quiz.length - 1) {
		loadScore();
	}
	let rightOrWrong = ''
	if (options[oindex].isCorrect) {
		rightOrWrong = 'right';
		scorecard.push(true);
    } else {
    	rightOrWrong = 'wrong';
    	scorecard.push(false);
	}
    let points = scorecard.filter(correct => correct).length;
    let plural = points === 1 ? '' : 's';
    let feedbackHTML = `<div class="top feedback"><h1 class="question">You got it ${rightOrWrong}!</h1><div class="next answer"><a href="#">Next Question</a></div><div class="points question">You've earned ${points} point${plural} so far.</div></div>`;
	$('main').append(feedbackHTML);
	$('.next').on('click', (e) => {
		e.preventDefault();
		loadQuestion(quiz, qindex);
	});
}

const loadQuestion = (quizObject, index) => {
	qindex = index;
	question = quizObject[qindex];
	options = question.options;
	$('.feedback').remove();
	const htmlTemplate = `
	    <div class="question">
	    	<div class="top">
				<div>
					<img src="img/logo.png"
				</div>

	            <div class="qtext">${question.qtext}</div>
	            <div class="option"><a href="#">${options[0].otext}</a></div>
	            <div class="option"><a href="#">${options[1].otext}</a></div>
	            <div class="option"><a href="#">${options[2].otext}</a></div>
			</div>
        </div>
		<div class="swipe">
			<p><small>Swipe left to reveal comments</small></p>
		</div>
    	`
    $('main').append(htmlTemplate);
    $('.option').each(oindex => {
    	console.log('added onclick to option ' + oindex);
    	$('.option').eq(oindex).on('click', e => {
    		e.preventDefault();
    		loadFeedback(oindex);
    	});
    });
}

const loadScore = () => {console.log("All Questions Answered")}

loadQuestion(quiz, 0);